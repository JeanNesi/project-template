import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "react-use";
import * as Style from "./styles";
import { useKeydown, useOutsideClick } from "@/hooks";
import { IMultiSelect, IOptions } from "./types";
import { MultiSelectOptions, MultiSelectSelections } from "./components";
import { DotLoading, LoadingWrapper } from "@/components/Loadings";

export const MultiSelect = ({
  label,
  options,
  value,
  onChange,
}: IMultiSelect) => {
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<
    IOptions[]
  >([]);

  // #region Controlled or Uncontrolled
  const isControlled = !!value;
  const selectedOptions = isControlled ? value : internalSelectedOptions;
  const setSelectedOptions = isControlled
    ? onChange
    : setInternalSelectedOptions;
  // #endregion

  // #region Search
  const [search, setSearch] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const offset = 50;

  useDebounce(() => setDebouncedValue(search), 300, [search]);

  const isAsync = typeof options === "function";

  const { data: asyncOptions, isLoading } = useQuery({
    queryKey: ["asyncOptions", { debouncedValue }],
    queryFn: () =>
      isAsync ? options({ search: debouncedValue }) : Promise.resolve(options),
    initialData: isAsync ? [] : (options as IOptions[]),
    enabled: isAsync,
  });

  const filteredOptions = !isAsync
    ? asyncOptions
        .filter(({ label: text }) =>
          text.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, offset)
    : asyncOptions;
  // #endregion

  // #region Dropdown
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  function closeDropdown() {
    setDropdownOpen(false);
    setSearch("");
  }

  const { ref } = useOutsideClick({
    action: closeDropdown,
  });

  useKeydown({ key: "Escape", action: closeDropdown });
  // #endregion

  return (
    <Style.Container ref={ref}>
      <MultiSelectSelections
        label={label}
        selectedOptions={selectedOptions}
        onClick={() => {
          if (dropdownOpen) closeDropdown();
          else setDropdownOpen(true);
        }}
      />

      {dropdownOpen && (
        <Style.Dropdown>
          <Style.SearchInput
            value={search}
            placeholder="Buscar"
            autoFocus
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />

          {!!filteredOptions.length && (
            <Style.SelectAll
              onClick={() => {
                setSelectedOptions(asyncOptions);
                onChange(asyncOptions);
              }}
            >
              <p className="p3">Selecionar todos</p>
            </Style.SelectAll>
          )}

          <MultiSelectOptions
            search={search}
            options={filteredOptions}
            selectedOptions={selectedOptions}
            onSelectOption={(newSelectedOptions) => {
              setSelectedOptions(newSelectedOptions);
              onChange(newSelectedOptions);
            }}
          />

          {!!filteredOptions.length && (
            <Style.ClearSelection
              onClick={() => {
                setSelectedOptions([]);
                onChange([]);
              }}
            >
              <p className="p3">Limpar seleção</p>
              <p className="p4">
                {selectedOptions.length} de {asyncOptions.length}
              </p>
            </Style.ClearSelection>
          )}

          {isLoading && (
            <LoadingWrapper minHeight="100px">
              <DotLoading />
            </LoadingWrapper>
          )}

          {!filteredOptions.length && (
            <Style.NoResults className="p4">
              Nenhum resultado encontrado!
            </Style.NoResults>
          )}
        </Style.Dropdown>
      )}
    </Style.Container>
  );
};

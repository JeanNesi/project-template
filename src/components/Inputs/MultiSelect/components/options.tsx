import { HighlightedText } from "@/components/Text";
import * as Style from "../styles";
import { IOptions } from "../types";

interface IMultiSelectOptions {
  search: string;
  options: IOptions[];
  selectedOptions: IOptions[];
  onSelectOption: (option: IOptions[]) => void;
}

export const MultiSelectOptions = ({
  search,
  options,
  selectedOptions,
  onSelectOption,
}: IMultiSelectOptions) => {
  const checkSelectedOptions = (optionValue: string) =>
    selectedOptions.some(({ value }) => value === optionValue);

  const handleSelectOption = (option: IOptions) => {
    if (checkSelectedOptions(option.value)) {
      const filteredOptions = selectedOptions.filter(
        (item) => item.value !== option.value
      );

      onSelectOption(filteredOptions);
      return;
    }

    const newSelectedOptions = [...selectedOptions, option];
    onSelectOption(newSelectedOptions);
  };

  return (
    <Style.OptionsContainer>
      {options.map((option) => (
        <Style.Option
          key={option.value}
          onClick={() => handleSelectOption(option)}
        >
          <Style.Checkbox
            type="checkbox"
            checked={checkSelectedOptions(option.value)}
            onChange={() => {}}
          />
          <HighlightedText text={option.label} highlight={search} />
        </Style.Option>
      ))}
    </Style.OptionsContainer>
  );
};

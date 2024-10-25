// LIBS
import { forwardRef, ForwardRefRenderFunction } from "react";
// TYPES
import { MagnifyingGlass } from "@phosphor-icons/react";
import { IInput } from "./types";
// COMPONENTS
import { InputContainer } from "./styles";
import { IconButton } from "../../Buttons";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { name, type = "text", onClickIcon, ...rest },
  ref
) => (
  <InputContainer>
    <IconButton icon={MagnifyingGlass} onClick={() => onClickIcon()} />
    <input
      type={type}
      id={name}
      name={name}
      ref={ref}
      maxLength={40}
      placeholder="Procurar"
      {...rest}
    />
  </InputContainer>
);
export const SearchInput = forwardRef(InputBase);

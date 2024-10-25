// LIBS
import { forwardRef, ForwardRefRenderFunction } from "react";
// TYPES
import { ISelect } from "./types";
// COMPONENTS
import { SelectContainer } from "./styles";
import { Heading } from "@/components/Text";

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, ISelect> = (
  { label, name, ...rest },
  ref
) => (
  <SelectContainer>
    {label && <Heading as="h6">{label}</Heading>}
    <select id={name} name={name} ref={ref} {...rest} />
  </SelectContainer>
);
export const Select = forwardRef(SelectBase);

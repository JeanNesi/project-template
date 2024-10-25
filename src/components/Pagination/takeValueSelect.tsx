import { Select } from "../Inputs";
import * as Style from "./styles";

interface ITakeValueSelect {
  value: number;
  onChange: (value: number) => void;
}

export const TakeValueSelect = ({ value, onChange }: ITakeValueSelect) => {
  const options = [5, 10, 20, 30, 40, 50];

  return (
    <Style.TakeContainer>
      <p className="p3">Itens por página</p>
      <Select
        value={value}
        onChange={({ target }) => {
          const currentTake = Number(target.value);
          onChange(currentTake);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Style.TakeContainer>
  );
};

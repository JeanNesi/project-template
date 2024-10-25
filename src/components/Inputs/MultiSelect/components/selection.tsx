import * as Style from "../styles";
import { ImageComponent } from "@/components/ImageComponent";
import { img } from "@/assets/img";
import { IOptions } from "../types";

interface ISelection {
  label?: string;
  selectedOptions: IOptions[];
  onClick: () => void;
}

export const MultiSelectSelections = ({
  onClick,
  selectedOptions,
  label,
}: ISelection) => {
  const selectionsAmount = selectedOptions.length;

  return (
    <>
      {label && <h6>{label}</h6>}
      <Style.SelectionContainer onClick={() => onClick()}>
        {!selectionsAmount && (
          <Style.Placeholder className="p2">Selecione</Style.Placeholder>
        )}

        {selectionsAmount === 1 && (
          <p className="p2">{selectedOptions[0].label}</p>
        )}

        {selectionsAmount > 1 && (
          <p
            className="p2"
            data-tooltip-id="selections"
            data-tooltip-html={selectedOptions
              .map((option) => option.label)
              .join(";<br>")}
          >
            {selectionsAmount} selecionados
          </p>
        )}

        <Style.ArrowContainer>
          <ImageComponent src={img.grayArrow} size="16px" />
        </Style.ArrowContainer>
      </Style.SelectionContainer>
    </>
  );
};

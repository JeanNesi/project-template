import { HTMLAttributes } from "react";
import * as Style from "./styles";

interface IHighlightedText extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  highlight: string;
}

export const HighlightedText = ({
  highlight,
  text,
  ...rest
}: IHighlightedText) => {
  if (!highlight)
    return (
      <p className="p3" {...rest}>
        {text}
      </p>
    );

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const splittedText = text.split(regex);

  return (
    <p className="p3" {...rest}>
      {splittedText.map((item, i) =>
        item.toLowerCase() === highlight.toLowerCase() ? (
          <Style.Highlighted key={i}>{item}</Style.Highlighted>
        ) : (
          item
        )
      )}
    </p>
  );
};

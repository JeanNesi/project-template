import styled from "styled-components";

export interface IImgStyle {
  $radius?: string;
  $size?: string;
  $width?: string;
  $height?: string;
  $rotate?: string;
  $objectFit?: "contain" | "cover";
}

export const Img = styled.img<IImgStyle>`
  ${({ $size }) =>
    $size &&
    ` min-width:${$size}; width: ${$size}; min-height: ${$size};  height: ${$size};`}

  ${({ $width }) => $width && `min-width:${$width} ; width: ${$width};`}

  ${({ $height }) => $height && `min-height: ${$height}; height: ${$height};`}

  ${({ $radius }) => $radius && `border-radius:${$radius};`}

  ${({ $rotate }) => $rotate && `rotate: ${$rotate};`}

  ${({ $objectFit }) => $objectFit && `object-fit: ${$objectFit};`}

  display: grid;
  place-items: center;
`;

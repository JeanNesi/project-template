// COMPONENTS

import { IconWrapper } from "@/components/IconWrapper";
import { ContainerButton } from "./styles";

// TYPES
import { IIconButton } from "./types";
import { theme } from "@/styles/theme";

export const IconButton = ({
  label,
  icon: Icon,
  onClick,
  iconConfig: customIconConfig = {},
  labelConfig: customLabelConfig = {},
  opacity,
  selected,
  disabled = false,
  title = "",
  type = "button",
}: IIconButton) => {
  const labelConfig = {
    color: theme.neutralColor[100],
    position: "left",
    className: "p2",
    fontWeight: "500",
    hideLabelOnMedia: true,
    ...customLabelConfig,
  };

  const iconConfig = {
    color: theme.neutralColor[100],
    size: 16,
    ...customIconConfig,
  };

  return (
    <ContainerButton
      title={title}
      disabled={disabled}
      onClick={onClick}
      type={type}
      $hideLabelOnMedia={labelConfig.hideLabelOnMedia}
      $labelPos={labelConfig.position}
      $selected={selected}
      $opacity={opacity}
      $color={labelConfig.color}
      $fontWeight={labelConfig.fontWeight}
    >
      {iconConfig.bgColor && (
        <IconWrapper bgColor={iconConfig.bgColor}>
          <Icon size={iconConfig.size} color={iconConfig.color} />
        </IconWrapper>
      )}

      {!iconConfig.bgColor && (
        <Icon size={iconConfig.size} color={iconConfig.color} />
      )}
      {label && <p className={labelConfig.className}>{label}</p>}
    </ContainerButton>
  );
};

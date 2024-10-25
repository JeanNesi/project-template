import { theme } from "@/styles/theme";
import * as Style from "./styles";

interface IIconWrapper {
  bgColor?: string;
  size?: number;
  children: React.ReactNode;
}

export const IconWrapper = ({
  children,
  size = 20,
  bgColor = theme.color.primary,
}: IIconWrapper) => (
  <Style.Wrapper $size={size} $bgColor={bgColor}>
    {children}
  </Style.Wrapper>
);

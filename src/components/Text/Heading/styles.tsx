import styled from "styled-components";
import { theme } from "@/styles/theme";

export const DynamicText = styled(({ as: Component = "h2", ...props }) => (
  <Component {...props} />
))`
  color: ${(props) => props.color || props.theme.color.text};
  font-family: ${theme.fonts.text};
`;

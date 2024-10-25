import * as Style from "./styles";
import { IHeading } from "./types";

export const Heading = ({ as, children, ...rest }: IHeading) => (
  <Style.DynamicText as={as} {...rest}>
    {children}
  </Style.DynamicText>
);

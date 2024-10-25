import * as Style from "./styles";

export const LoadingWrapper = ({
  minHeight = "80dvh",
  children,
}: {
  minHeight?: string;
  children: React.ReactNode;
}) => (
  <Style.LoadingWrapperDiv $minHeight={minHeight}>
    {children}
  </Style.LoadingWrapperDiv>
);

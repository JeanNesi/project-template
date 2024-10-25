import { Heading } from "@/components/Text";
import { LoadingContainer, LoadingWrapper } from "./styles";
import { theme } from "@/styles/theme";

interface IDotLoading {
  label?: string;
  bgColor?: string;
}

export const DotLoading = ({
  label,
  bgColor = theme.color.primary,
}: IDotLoading) => (
  <LoadingContainer $bgColor={bgColor}>
    <LoadingWrapper>
      <Heading as="h4">{label}</Heading>
      <div>
        <div className="dot-pulse" />
      </div>
    </LoadingWrapper>
  </LoadingContainer>
);

import { Heading } from "@/components/Text";
import { LoadingContainer, LoadingWrapper } from "./styles";

interface IDotLoading {
  label?: string;
}

export const DotSpinLoading = ({ label }: IDotLoading) => (
  <LoadingContainer>
    <LoadingWrapper>
      <Heading as="h4">{label}</Heading>
      <div>
        <div className="dot-spin" />
      </div>
    </LoadingWrapper>
  </LoadingContainer>
);

import { Empty } from "@phosphor-icons/react";
import * as Style from "./styles";
import { INotFoundRegisters } from "./types";
import { Heading } from "../Text";

export const NotFoundRegisters = ({
  label,
  height = "80dvh",
}: INotFoundRegisters) => (
  <Style.Container height={height}>
    <Empty size={80} />
    <Heading as="h6">{label}</Heading>
  </Style.Container>
);

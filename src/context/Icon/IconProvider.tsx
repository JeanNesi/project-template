import { IconContext } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";
import { theme } from "@/styles/theme";

export const IconProvider = ({ children }: PropsWithChildren) => (
  <IconContext.Provider
    value={{ color: theme.color.primary, size: 16, weight: "bold" }}
  >
    {children}
  </IconContext.Provider>
);

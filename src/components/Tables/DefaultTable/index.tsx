// TYPES
import { ITableBody, ITableHeader } from "./types";

// COMPONENTS
import * as Style from "./styles";
import { theme } from "@/styles/theme";

export const DefaultTable = ({ colsHeader, children }: ITableHeader) => (
  <Style.Background>
    <Style.TableContainer>
      <Style.TableHead>
        <Style.TableRowHead>
          {colsHeader.map((col) => (
            <Style.TableColHeader
              key={col.label}
              $cssProps={col.cssProps}
              $cssOnMedia={col.cssOnMedia}
            >
              {col.label}
            </Style.TableColHeader>
          ))}
        </Style.TableRowHead>
      </Style.TableHead>
      <Style.TableBody>{children}</Style.TableBody>
    </Style.TableContainer>
  </Style.Background>
);

export const DefaultTableContent = ({
  colsBody,
  bgColor = theme.color.foreground,
  title = "",
}: ITableBody) => (
  <Style.TableRow $bgColor={bgColor}>
    {colsBody.map((col, i: number) => (
      <Style.TableColBody
        title={title}
        key={col.cell + i}
        $cssOnMedia={col.cssOnMedia}
        $cssProps={col.cssProps}
      >
        {col.cell}
      </Style.TableColBody>
    ))}
  </Style.TableRow>
);

import styled from "styled-components";

export const Background = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 ${({ theme }) => theme.size["2"]};
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRowHead = styled.tr``;

export const TableRow = styled.tr<{ $bgColor?: string }>`
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`};
`;

export const TableColHeader = styled.th<{ $cssProps: any; $cssOnMedia: any }>`
  color: ${({ theme }) => theme.neutralColor[400]};
  text-align: start;
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.size["4"]};

  ${({ $cssProps }) => $cssProps}

  @media (max-width: 900px) {
    ${({ $cssOnMedia }) => $cssOnMedia}
  }
`;

export const TableColBody = styled.td<{
  $cssProps: any;
  $cssOnMedia: any;
}>`
  height: ${({ theme }) => theme.size["24"]};
  text-align: start;

  padding: 0 ${({ theme }) => theme.size["4"]};

  &:first-of-type {
    border-radius: ${({ theme }) => theme.size["2"]} 0px 0px
      ${({ theme }) => theme.size["2"]};
  }

  &:last-of-type {
    border-radius: 0px ${({ theme }) => theme.size["2"]}
      ${({ theme }) => theme.size["2"]} 0px;
  }

  ${({ $cssProps }) => $cssProps}

  @media (max-width: 900px) {
    min-width: 150px;
    ${({ $cssOnMedia }) => $cssOnMedia}
  }
`;

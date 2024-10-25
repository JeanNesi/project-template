import styled from "styled-components";
import { Input } from "../Input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["2"]};
  width: 100%;
  position: relative;
`;

export const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.neutralColor[500]};
  background-color: ${({ theme }) => theme.color.foreground};
  height: 32px;
  border: 1px solid ${({ theme }) => theme.neutralColor[400]};
  border-radius: ${({ theme }) => theme.size["2"]};
  padding: ${({ theme }) => theme.size["4"]} ${({ theme }) => theme.size["4"]};
  gap: ${({ theme }) => theme.size["4"]};
  cursor: pointer;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  #selections {
    z-index: 9999;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.neutralColor[200]};
  padding-left: ${({ theme }) => theme.size["4"]};
`;

export const Placeholder = styled.p`
  color: ${({ theme }) => theme.neutralColor[300]};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.color.foreground};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: ${({ theme }) => theme.size["2"]};
  position: absolute;
  width: 100%;
  z-index: 99;
  top: 110%;
`;

export const SearchInput = styled(Input)`
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.neutralColor[100]};
  height: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 200px;
`;

export const Checkbox = styled.input`
  max-width: 12px;
  max-height: 12px;
`;

export const Option = styled.button`
  background-color: ${({ theme }) => theme.color.foreground};
  color: ${({ theme }) => theme.neutralColor[500]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size["4"]};

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.neutralColor[100]};
  }
`;

export const NoResults = styled.p`
  color: ${({ theme }) => theme.neutralColor[300]};
  padding: ${({ theme }) => theme.size["4"]};
  text-align: center;
`;

export const SelectAll = styled.button`
  background-color: ${({ theme }) => theme.color.foreground};
  color: ${({ theme }) => theme.neutralColor[500]};
  display: flex;
  align-items: center;
  border-radius: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size["2"]};
`;

export const ClearSelection = styled.button`
  background-color: ${({ theme }) => theme.color.foreground};
  color: ${({ theme }) => theme.neutralColor[500]};
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.neutralColor[100]};
  border-radius: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size["2"]};
`;

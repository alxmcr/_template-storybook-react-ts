import styled from 'styled-components';

export type ButtonBaseProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const ButtonBase = styled.button<ButtonBaseProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

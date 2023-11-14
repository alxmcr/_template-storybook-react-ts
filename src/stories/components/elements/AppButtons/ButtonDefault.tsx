import styled from 'styled-components';
import { AppButton } from '.';

export const ButtonDefault = styled(AppButton)`
  background-color: ${(props) => props.theme.button.solid.default.background};
  border: 1px solid ${(props) => props.theme.button.solid.default.borderColor};
  color: ${(props) => props.theme.button.solid.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.solid.hover.background};
    border: 1px solid ${(props) => props.theme.button.solid.hover.borderColor};
    color: ${(props) => props.theme.button.solid.hover.text};
  }
`;

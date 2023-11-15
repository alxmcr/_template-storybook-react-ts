import styled from 'styled-components';
import { AppButton } from './ButtonBase';

export const ButtonOutline = styled(AppButton)`
  background-color: ${(props) => props.theme.button.outline.default.background};
  border: 1px solid ${(props) => props.theme.button.outline.default.borderColor};
  color: ${(props) => props.theme.button.outline.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.outline.hover.background};
    border: 1px solid ${(props) => props.theme.button.outline.hover.borderColor};
    color: ${(props) => props.theme.button.outline.hover.text};
  }
`;

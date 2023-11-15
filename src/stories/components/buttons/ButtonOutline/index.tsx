import styled from 'styled-components';
import { ButtonBase } from '../ButtonBase';

export const ButtonOutline = styled(ButtonBase)`
  background-color: ${(props) => props.theme.button.outline.default.background};
  border: 1px solid ${(props) => props.theme.button.outline.default.borderColor};
  color: ${(props) => props.theme.button.outline.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.outline.hover.background};
    border: 1px solid ${(props) => props.theme.button.outline.hover.borderColor};
    color: ${(props) => props.theme.button.outline.hover.text};
  }

  &:active {
    background-color: ${(props) =>
      props.theme.button.outline.active.background};
    border: 1px solid
      ${(props) => props.theme.button.outline.active.borderColor};
    color: ${(props) => props.theme.button.outline.active.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.button.outline.disabled.background};
    border: 1px solid
      ${(props) => props.theme.button.outline.disabled.borderColor};
    color: ${(props) => props.theme.button.outline.disabled.text};
    opacity: ${(props) => props.theme.button.solid.opacity};
  }
`;

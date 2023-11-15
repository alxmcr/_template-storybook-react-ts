import styled from 'styled-components';
import { ButtonBase } from '../ButtonBase';

export const ButtonSolid = styled(ButtonBase)`
  background-color: ${(props) => props.theme.button.solid.default.background};
  border: 1px solid ${(props) => props.theme.button.solid.default.borderColor};
  color: ${(props) => props.theme.button.solid.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.solid.hover.background};
    border: 1px solid ${(props) => props.theme.button.solid.hover.borderColor};
    color: ${(props) => props.theme.button.solid.hover.text};
  }

  &:active {
    background-color: ${(props) => props.theme.button.solid.active.background};
    border: 1px solid ${(props) => props.theme.button.solid.active.borderColor};
    color: ${(props) => props.theme.button.solid.active.text};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.button.solid.disabled.background};
    border: 1px solid
      ${(props) => props.theme.button.solid.disabled.borderColor};
    color: ${(props) => props.theme.button.solid.disabled.text};
    opacity: ${(props) => props.theme.button.solid.opacity};
  }
`;

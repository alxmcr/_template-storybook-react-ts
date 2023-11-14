import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const DefaultButton = styled(Button)`
  background-color: ${(props) => props.theme.button.solid.default.background};
  border: 1px solid ${(props) => props.theme.button.solid.default.borderColor};
  color: ${(props) => props.theme.button.solid.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.solid.hover.background};
    border: 1px solid ${(props) => props.theme.button.solid.hover.borderColor};
    color: ${(props) => props.theme.button.solid.hover.text};
  }
`;

export const OutlineButton = styled(Button)`
  background-color: ${(props) => props.theme.button.outline.default.background};
  border: 1px solid ${(props) => props.theme.button.outline.default.borderColor};
  color: ${(props) => props.theme.button.outline.default.text};

  &:hover {
    background-color: ${(props) => props.theme.button.outline.hover.background};
    border: 1px solid ${(props) => props.theme.button.outline.hover.borderColor};
    color: ${(props) => props.theme.button.outline.hover.text};
  }
`;

export const GradientButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${(props) =>
      props.theme.button.gradient.default.gradientColors.gradientStart},
    ${(props) => props.theme.button.gradient.default.gradientColors.gradientEnd}
  );
  color: ${(props) => props.theme.button.gradient.default.text};

  &:hover {
    background: linear-gradient(
      135deg,
      ${(props) =>
        props.theme.button.gradient.hover.gradientColors.gradientStart},
      ${(props) => props.theme.button.gradient.hover.gradientColors.gradientEnd}
    );
    color: ${(props) => props.theme.button.gradient.hover.text};
  }
`;

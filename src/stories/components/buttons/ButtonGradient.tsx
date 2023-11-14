import styled from 'styled-components';
import { AppButton } from '.';

export const ButtonGradient = styled(AppButton)`
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

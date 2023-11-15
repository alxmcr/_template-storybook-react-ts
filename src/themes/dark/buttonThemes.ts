import {
  StylesButtonGradientStates,
  StylesButtonStates,
} from '../../@types/styles/themeTypes';
import { colors } from '../colors';

export const darkThemeBtnSolid: StylesButtonStates = {
  default: {
    background: colors.grape[400],
    borderColor: colors.grape[400],
    text: colors.grape[950],
  },
  hover: {
    background: colors.grape[300],
    borderColor: colors.grape[300],
    text: colors.grape[950],
  },
  active: {
    background: colors.grape[500],
    borderColor: colors.grape[500],
    text: colors.grape[950],
  },
  disabled: {
    background: colors.grape[800],
    borderColor: colors.grape[800],
    text: colors.grape[100],
    opacity: 0.5,
  },
};

export const darkThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: colors.grape[300],
    text: colors.grape[300],
  },
  hover: {
    background: colors.grape[950],
    borderColor: colors.grape[300],
    text: colors.grape[300],
  },
  active: {
    background: colors.grape[900],
    borderColor: colors.grape[300],
    text: colors.grape[300],
  },
  disabled: {
    background: 'transparent',
    borderColor: colors.grape[300],
    text: colors.grape[300],
    opacity: 0.5,
  },
};

export const darkThemeBtnGradient: StylesButtonGradientStates = {
  default: {
    gradientColors: {
      gradientEnd: colors.grape[300],
      gradientStart: colors.grape[500],
    },
    text: colors.grape[950],
  },
  hover: {
    gradientColors: {
      gradientEnd: colors.grape[200],
      gradientStart: colors.grape[400],
    },
    text: colors.grape[950],
  },
  active: {
    gradientColors: {
      gradientEnd: colors.grape[400],
      gradientStart: colors.grape[600],
    },
    text: colors.grape[950],
  },
  disabled: {
    gradientColors: {
      gradientEnd: colors.grape[700],
      gradientStart: colors.grape[900],
    },
    text: colors.grape[100],
    opacity: 0.5,
  },
};

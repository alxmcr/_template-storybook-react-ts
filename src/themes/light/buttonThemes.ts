import {
  StylesButtonGradientStates,
  StylesButtonStates,
} from '../../@types/styles/themeTypes';
import { colors } from '../colors';

export const lightThemeBtnSolid: StylesButtonStates = {
  default: {
    background: colors.grape[500],
    borderColor: colors.grape[500],
    text: colors.light,
  },
  hover: {
    background: colors.grape[600],
    borderColor: colors.grape[600],
    text: colors.light,
  },
  active: {
    background: colors.grape[700],
    borderColor: colors.grape[700],
    text: colors.light,
  },
  disabled: {
    background: colors.grape[200],
    borderColor: colors.grape[200],
    text: colors.grape[700],
    opacity: 0.5,
  },
};

export const lightThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: colors.grape[700],
    text: colors.grape[700],
  },
  hover: {
    background: colors.grape[50],
    borderColor: colors.grape[700],
    text: colors.grape[700],
  },
  active: {
    background: colors.grape[100],
    borderColor: colors.grape[700],
    text: colors.grape[700],
  },
  disabled: {
    background: 'transparent',
    borderColor: colors.grape[700],
    text: colors.grape[700],
    opacity: 0.5,
  },
};

export const lightThemeBtnGradient: StylesButtonGradientStates = {
  default: {
    gradientColors: {
      gradientEnd: colors.grape[400],
      gradientStart: colors.grape[600],
    },
    text: colors.light,
  },
  hover: {
    gradientColors: {
      gradientEnd: colors.grape[500],
      gradientStart: colors.grape[700],
    },
    text: colors.light,
  },
  active: {
    gradientColors: {
      gradientEnd: colors.grape[600],
      gradientStart: colors.grape[800],
    },
    text: colors.light,
  },
  disabled: {
    gradientColors: {
      gradientEnd: colors.grape[100],
      gradientStart: colors.grape[300],
    },
    text: colors.grape[700],
  },
};

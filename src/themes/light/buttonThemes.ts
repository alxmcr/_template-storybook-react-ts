import {
  StylesButtonGradientStates,
  StylesButtonStates,
} from '../../@types/styles/themeTypes';
import { colors } from '../colors';

export const lightThemeBtnSolid: StylesButtonStates = {
  default: {
    background: colors.blue[500],
    borderColor: colors.blue[500],
    text: colors.light,
  },
  hover: {
    background: colors.blue[600],
    borderColor: colors.blue[600],
    text: colors.light,
  },
  active: {
    background: colors.blue[700],
    borderColor: colors.blue[700],
    text: colors.light,
  },
  disabled: {
    background: colors.blue[200],
    borderColor: colors.blue[200],
    text: colors.blue[700],
    opacity: 0.5,
  },
};

export const lightThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: colors.blue[700],
    text: colors.blue[700],
  },
  hover: {
    background: colors.blue[50],
    borderColor: colors.blue[700],
    text: colors.blue[700],
  },
  active: {
    background: colors.blue[100],
    borderColor: colors.blue[700],
    text: colors.blue[700],
  },
  disabled: {
    background: 'transparent',
    borderColor: colors.blue[700],
    text: colors.blue[700],
    opacity: 0.5,
  },
};

export const lightThemeBtnGradient: StylesButtonGradientStates = {
  default: {
    gradientColors: {
      gradientEnd: colors.blue[400],
      gradientStart: colors.blue[600],
    },
    text: colors.light,
  },
  hover: {
    gradientColors: {
      gradientEnd: colors.blue[500],
      gradientStart: colors.blue[700],
    },
    text: colors.light,
  },
  active: {
    gradientColors: {
      gradientEnd: colors.blue[600],
      gradientStart: colors.blue[800],
    },
    text: colors.light,
  },
  disabled: {
    gradientColors: {
      gradientEnd: colors.blue[100],
      gradientStart: colors.blue[300],
    },
    text: colors.blue[700],
  },
};

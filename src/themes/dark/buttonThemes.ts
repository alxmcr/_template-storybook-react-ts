import { StylesButtonStates } from '../../@types/styles/themeTypes';
import { colors } from '../colors';

export const darkThemeBtnSolid: StylesButtonStates = {
  default: {
    background: colors.blue[400],
    borderColor: colors.blue[400],
    text: colors.blue[950],
  },
  hover: {
    background: colors.blue[300],
    borderColor: colors.blue[300],
    text: colors.blue[950],
  },
  active: {
    background: colors.blue[500],
    borderColor: colors.blue[500],
    text: colors.blue[950],
  },
  disabled: {
    background: colors.blue[800],
    borderColor: colors.blue[800],
    text: colors.blue[100],
  },
};

export const darkThemeBtnOutline: StylesButtonStates = {
  default: {
    background: 'transparent',
    borderColor: colors.blue[300],
    text: colors.blue[300],
  },
  hover: {
    background: colors.blue[950],
    borderColor: colors.blue[300],
    text: colors.blue[300],
  },
  active: {
    background: colors.blue[900],
    borderColor: colors.blue[300],
    text: colors.blue[300],
  },
  disabled: {
    background: 'transparent',
    borderColor: colors.blue[300],
    text: colors.blue[300],
  },
};

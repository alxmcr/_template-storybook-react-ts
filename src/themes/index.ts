import { AppStyledTheme } from '../@types/styles/themeTypes';
import { colors } from './colors';
import { darkButtonStyles } from './dark';
import { lightButtonStyles } from './light';

const lightTheme: AppStyledTheme = {
  name: 'light',
  background: colors.light,
  text: colors.grape[950],
  button: lightButtonStyles,
};

const darkTheme: AppStyledTheme = {
  name: 'dark',
  background: '#000',
  text: colors.grape[300],
  button: darkButtonStyles,
};

export { darkTheme, lightTheme };

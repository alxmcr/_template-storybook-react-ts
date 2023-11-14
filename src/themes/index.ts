import { AppStyledTheme } from '../@types/themeTypes';
import { colors } from './colors';
import { darkButtonStyles } from './dark';
import { lightButtonStyles } from './light';

const lightTheme: AppStyledTheme = {
  name: 'light',
  background: colors.light,
  text: colors.blue[950],
  button: lightButtonStyles,
};

const darkTheme: AppStyledTheme = {
  name: 'dark',
  background: '#000',
  text: colors.blue[300],
  button: darkButtonStyles,
};

export { darkTheme, lightTheme };

import { AppStyledTheme } from './themeTypes';

export type StyleThemeContextData = {
  theme: AppStyledTheme;
  toggleTheme: () => void;
};

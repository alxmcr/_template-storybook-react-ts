import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyleThemeContextData } from '../../@types/styles/stylesProviderTypes';
import { AppStyledTheme } from '../../@types/styles/themeTypes';
import { darkTheme, lightTheme } from '../../themes';
import { StyleThemeContext } from './StyledThemeContext';

type StyledThemeProviderProps = {
  children: React.ReactNode;
};

export default function StyledThemeProvider({
  children,
}: StyledThemeProviderProps) {
  const [theme, setTheme] = React.useState<AppStyledTheme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.name === 'light' ? darkTheme : lightTheme,
    );
  };

  const value: StyleThemeContextData = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyleThemeContext.Provider value={value}>
        {children}
      </StyleThemeContext.Provider>
    </ThemeProvider>
  );
}

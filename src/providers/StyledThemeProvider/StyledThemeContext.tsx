import React from 'react';
import { lightTheme } from '../../themes';
import { StyleThemeContextData } from '../../@types/styles/stylesProviderTypes';

const initialStyleTheme: StyleThemeContextData = {
  theme: lightTheme,
  toggleTheme: () => {},
};

export const StyleThemeContext = React.createContext(initialStyleTheme);

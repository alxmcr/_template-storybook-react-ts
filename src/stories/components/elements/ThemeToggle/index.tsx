import React from 'react';
import { StyleThemeContext } from '../../../../providers/StyledThemeProvider/StyledThemeContext';
import AppButtonDefault from '../../buttons/AppButtonDefault';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = React.useContext(StyleThemeContext);

  return <AppButtonDefault onClick={toggleTheme}>{theme.name}</AppButtonDefault>;
}

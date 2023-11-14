import React from 'react';
import { StyleThemeContext } from '../../../../providers/StyledThemeProvider/StyledThemeContext';
import { DefaultButton } from '../Button';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = React.useContext(StyleThemeContext);

  return <DefaultButton onClick={toggleTheme}>{theme.name}</DefaultButton>;
}

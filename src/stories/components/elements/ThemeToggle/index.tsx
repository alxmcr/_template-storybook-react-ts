import React from 'react';
import { StyleThemeContext } from '../../../../providers/StyledThemeProvider/StyledThemeContext';
import { ButtonSolid } from '../../buttons/ButtonSolid';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = React.useContext(StyleThemeContext);

  return <ButtonSolid onClick={toggleTheme}>{theme.name}</ButtonSolid>;
}

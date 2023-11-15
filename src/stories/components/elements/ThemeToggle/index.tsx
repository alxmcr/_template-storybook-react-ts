import React from 'react';
import { StyleThemeContext } from '../../../../providers/StyledThemeProvider/StyledThemeContext';
import { ButtonDefault } from '../../buttons/ButtonSolid';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = React.useContext(StyleThemeContext);

  return <ButtonDefault onClick={toggleTheme}>{theme.name}</ButtonDefault>;
}

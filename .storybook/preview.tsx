import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import StyledThemeProvider from '../src/providers/StyledThemeProvider';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import { darkTheme, lightTheme } from '../src/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;

const withStyledTheme = (Story) => (
  <StyledThemeProvider>
    <Story />
  </StyledThemeProvider>
);

const preview: Preview = {
  decorators: [
    withStyledTheme,
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;

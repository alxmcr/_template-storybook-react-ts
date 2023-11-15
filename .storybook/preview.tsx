import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import StyledThemeProvider from '../src/providers/StyledThemeProvider';

const withStyledTheme = (Story) => (
  <StyledThemeProvider>
    <Story />
  </StyledThemeProvider>
);

const preview: Preview = {
  decorators: [withStyledTheme],
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

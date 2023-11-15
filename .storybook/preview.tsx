import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import StyledThemeProvider from '../src/providers/StyledThemeProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledThemeProvider>
        <Story />
      </StyledThemeProvider>
    ),
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

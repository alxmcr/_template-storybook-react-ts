import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import StyledThemeProvider from './providers/StyledThemeProvider';
import { appRouter } from './router/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <RouterProvider router={appRouter} fallbackElement={<p>Loading...</p>} />
    </StyledThemeProvider>
  </React.StrictMode>,
);

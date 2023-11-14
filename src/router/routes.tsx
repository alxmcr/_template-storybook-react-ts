import { RouteObject, createBrowserRouter } from 'react-router-dom';
import OnePage from '../pages/OnePage';
import TwoPage from '../pages/TwoPage';

export const routes: RouteObject[] = [
  {
    id: 'one',
    path: '/',
    element: <OnePage />,
  },
  {
    id: 'two',
    path: '/',
    element: <TwoPage />,
  },
];

export const appRouter = createBrowserRouter(routes);

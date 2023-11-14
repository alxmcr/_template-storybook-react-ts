import { RouteObject, createBrowserRouter } from 'react-router-dom';
import OnePage from '../pages/OnePage';
import TwoPage from '../pages/TwoPage';
import { protectedLoader } from './loaders';

export const routes: RouteObject[] = [
  {
    id: 'one',
    path: '/',
    element: <OnePage />,
  },
  {
    id: 'two',
    path: '/two',
    element: <TwoPage />,
    loader: protectedLoader,
  },
];

export const appRouter = createBrowserRouter(routes);

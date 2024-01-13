import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import App from '../App';
import type { RouteObject } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const Category = loadable(() => import('@pages/Category'));
const ProductDetail = loadable(() => import('@pages/ProductDetail'));

export const ROUTE_OBJECT = [
  {
    children: [
      {
        element: <Main />,
        index: true,
      },
      {
        element: <Category />,
        path: 'category/:categoryCode',
      },
      {
        element: <ProductDetail />,
        path: 'detail',
      },
    ],
    element: <App />,
  },
] as RouteObject[];

export const router = createBrowserRouter(ROUTE_OBJECT);

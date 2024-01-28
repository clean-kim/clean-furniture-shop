import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import App from '../App';
import type { RouteObject } from 'react-router-dom';

const MainPage = loadable(() => import('@pages/MainPage'));
const CategoryPage = loadable(() => import('@pages/CategoryPage'));
const ProductDetailPage = loadable(() => import('@pages/ProductDetailPage'));
const CartPage = loadable(() => import('@pages/CartPage'));

export const ROUTE_OBJECT = [
  {
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <CategoryPage />,
        loader: async ({ params }) => {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products?category=${params.categoryCode}`);
          return response.json();
        },
        path: 'category/:categoryCode',
      },
      {
        element: <ProductDetailPage />,
        loader: async ({ params }) => {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/detail/${params.no}`);
          return response.json();
        },
        path: 'detail/:no',
      },
      {
        element: <CartPage />,
        path: 'cart',
      },
    ],
    element: <App />,
  },
] as RouteObject[];

export const router = createBrowserRouter(ROUTE_OBJECT);

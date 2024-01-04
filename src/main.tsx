import './index.css';
import '@assets/css/index.scss';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { worker } from '@mocks/browser';
import { router } from '@routes/router';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

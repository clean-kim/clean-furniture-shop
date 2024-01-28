import './index.css';
import '@assets/css/index.scss';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { worker } from '@mocks/browser';

async function enableMocking() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

enableMocking().then(async () => {
  const { router } = await import('@routes/router');
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
  );
});

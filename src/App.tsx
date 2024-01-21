import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@components/layout';
import { CartProvider } from './contexts/CartContext';

function App() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <HelmetProvider>
            <Header/>
            <div id='app'>
              <Outlet />
            </div>
            <Footer/>
          </HelmetProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@components/layout';

function App() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Header/>
          <div id='app'>
            <Outlet />
          </div>
          <Footer/>
        </HelmetProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

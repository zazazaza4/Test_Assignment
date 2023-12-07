import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Main from './pages/main';
import { Layout } from './layout';

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Main />
      </Layout>

      {fetchDevTools}
    </QueryClientProvider>
  );
}

export { App };

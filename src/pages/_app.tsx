import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ModalContextProvider } from '../context/ModalContext'
import ModalContainer from '@/components/ui/modals/ModalContainer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Component {...pageProps} />
          <ModalContainer />
        </QueryClientProvider>
      </ModalContextProvider>
    </>
  )
}

export default App

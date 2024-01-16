import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ModalContextProvider } from '../context/ModalContext'
import ModalContainer from '@/components/ui/modals/ModalContainer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { Provider } from 'react-redux'
import store from 'src/store/index'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ModalContextProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Component {...pageProps} />
            <ModalContainer />
          </QueryClientProvider>
        </ModalContextProvider>
      </Provider>
    </>
  )
}

export default App

import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ModalContextProvider } from '../context/ModalContext'
import ModalContainer from '@/components/ui/modals/ModalContainer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ModalContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <ModalContainer />
      </ModalContextProvider>
    </>
  )
}

export default App

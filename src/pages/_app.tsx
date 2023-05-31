import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ModalContextProvider } from '../context/ModalContext'
import Modal from '../components/ui/modals/Modal'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ModalContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      <Modal />
    </ModalContextProvider>
  </>
)

export default App

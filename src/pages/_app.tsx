import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ModalContextProvider } from '../context/ModalContext'
import Modal from '../components/ui/modals/Modal'
import { useModalStore } from '@/store/useModalStore'
import ModalContainer from '@/components/ui/modals/zustandModal/ModalContainer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ModalContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Modal />
        <ModalContainer />
      </ModalContextProvider>
    </>
  )
}

export default App

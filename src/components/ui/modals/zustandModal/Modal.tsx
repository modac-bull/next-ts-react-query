import { Body, Container, Header, Overlay } from './atoms'

const Modal = ({
  id,
  message,
  modalClose,
  modalSubmit,
}: {
  id: string
  message: string
  modalClose: () => void
  modalSubmit: () => void
}) => {
  return (
    <div>
      <Overlay />
      <Container>
        <Header title={id} onClose={modalClose} />
        <Body>
          <p>{message}</p>
          <button onClick={modalSubmit}>Submit</button>
          <button onClick={modalClose}>Close</button>
        </Body>
      </Container>
    </div>
  )
}

export default Modal

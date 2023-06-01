import { Modal, ModalBody, ModalHeader, Overlay } from './atoms';

export default function CustomModal({
  id,
  message,
  title,
  modalClose,
  modalSubmit,
}: {
  id: string;
  message: string;
  title: string;
  modalClose: () => void;
  modalSubmit: () => void;
}) {
  return (
    <>
      <Overlay />
      <Modal>
        <ModalHeader title={title} onClose={modalClose} />
        <ModalBody>
          <p>{message}</p>
          <button onClick={modalSubmit}>Submit</button>
          <button onClick={modalClose}>Close</button>
        </ModalBody>
      </Modal>
    </>
  );
}

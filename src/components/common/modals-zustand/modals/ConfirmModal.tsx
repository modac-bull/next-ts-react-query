import Button from '../buttons/Button';
import { Modal, ModalBody, ModalFooter, ModalMessage, Overlay } from './atoms';

export default function ConfirmModal({
  id,
  message,
  modalClose,
  modalSubmit,
}: {
  id: string;
  message: string;
  modalClose: () => void;
  modalSubmit: () => void;
}) {
  return (
    <>
      <Overlay />
      <Modal>
        <ModalBody>
          <ModalMessage>{message}</ModalMessage>
        </ModalBody>

        <ModalFooter>
          <Button size="lg" variant="secondary" onClick={modalSubmit}>
            확인
          </Button>
          <Button size="lg" variant="primary" onClick={modalClose}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

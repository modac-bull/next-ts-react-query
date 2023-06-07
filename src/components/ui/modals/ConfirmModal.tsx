import Button from '../buttons/Button';
import { Modal, ModalBody, ModalFooter, ModalMessage, Overlay } from './atoms';
import type { ModalType } from './types';

export default function ConfirmModal({
  id,
  size,
  message,
  modalClose,
  modalSubmit,
}: {
  id: string;
  size: ModalType['size'];
  message: string;
  modalClose: () => void;
  modalSubmit: () => void;
}) {
  return (
    <>
      <Overlay id={id} />
      <Modal size={size}>
        <ModalBody>
          <ModalMessage message={message} />
        </ModalBody>

        <ModalFooter>
          <Button size="lg" variant="secondary" onClick={modalSubmit}>
            버튼1(submit)
          </Button>
          <Button size="lg" variant="primary" onClick={modalClose}>
            버튼2(close)
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

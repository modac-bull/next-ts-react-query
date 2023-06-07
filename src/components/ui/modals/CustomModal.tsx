import Button from '../buttons/Button';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMessage,
  Overlay,
} from './atoms';
import type { ModalType } from './types';

export default function CustomModal({
  id,
  size,
  message,
  title,
  modalClose,
  modalSubmit,
}: {
  id: string;
  size: ModalType['size'];
  message: string;
  title: string;
  modalClose: () => void;
  modalSubmit: () => void;
}) {
  return (
    <>
      <Overlay id={id} />
      <Modal size={size}>
        <ModalHeader title={title} onClose={modalClose} />

        <ModalBody>
          <ModalMessage message={message} />
        </ModalBody>

        <ModalFooter>
          <Button size="lg" variant="secondary" onClick={modalSubmit}>
            버튼1(submit)
          </Button>
          <Button size="lg" variant="primary" onClick={modalClose}>
            버튼2(cancel)
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

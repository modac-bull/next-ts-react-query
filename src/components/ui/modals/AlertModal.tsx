import 'twin.macro';

import Button from '../buttons/Button';
import { Modal, ModalBody, ModalFooter, ModalMessage, Overlay } from './atoms';
import type { ModalType } from './types';

export default function AlertModal({
  id,
  size,
  message,
  modalSubmit,
}: {
  id: string;
  size: ModalType['size'];
  message: string;
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
          <Button size="lg" variant="primary" onClick={modalSubmit}>
            버튼(Submit)
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

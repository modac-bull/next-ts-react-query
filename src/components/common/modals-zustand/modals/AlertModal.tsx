import 'twin.macro';

import Button from '../buttons/Button';
import { Modal, ModalBody, Overlay } from './atoms';

export default function AlertModal({
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
          <p>{message}</p>
          <div>
            <Button size="lg" variant="secondary" onClick={modalSubmit}>
              확인
            </Button>

            <Button size="lg" variant="primary" onClick={modalClose}>
              취소
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

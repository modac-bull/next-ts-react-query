import React from 'react';

import { modalStore } from '@/store/modalStore';

export default function ModalContainer() {
  const { modals, closeModal } = modalStore();

  return (
    <>
      {modals.map(
        ({
          id,
          component: ModalComponent,
          message,
          title,
          onSubmit,
          onClose,
          props,
        }) =>
          ModalComponent && (
            <ModalComponent
              id={id}
              key={id}
              title={title}
              message={message}
              modalClose={() => {
                closeModal(id);
                onClose();
              }}
              modalSubmit={onSubmit}
              {...props}
            />
          ),
      )}
    </>
  );
}

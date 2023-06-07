import React from 'react';

import { modalStore } from '@/store/modalStore';

import type { ModalType } from './types';

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
          size = 'md',
          onSubmit,
          onClose,
          props,
        }: ModalType) =>
          ModalComponent && (
            <ModalComponent
              id={id}
              key={id}
              title={title}
              message={message}
              size={size}
              modalClose={() => {
                onClose && onClose();
                closeModal(id);
              }}
              modalSubmit={() => {
                onSubmit && onSubmit();
                closeModal(id);
              }}
              {...props}
            />
          ),
      )}
    </>
  );
}

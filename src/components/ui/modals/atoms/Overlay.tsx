import React from 'react';
import { styled } from 'twin.macro';

import { modalStore } from '@/store/modalStore';

type Props = {
  id: string;
};

export default function Overlay({ id }: Props) {
  const { closeModal } = modalStore();
  return (
    <OverlayElement
      onClick={() => {
        closeModal(id);
      }}
    ></OverlayElement>
  );
}

const OverlayElement = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

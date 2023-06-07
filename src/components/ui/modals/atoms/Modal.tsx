import React from 'react';
import { css, styled } from 'twin.macro';

import type { ModalType } from '../types';

type ModalProps = {
  size: ModalType['size'];
  children: React.ReactNode;
};

type ModalElementType = {
  size: ModalProps['size'];
};

export default function Modal({ size, children }: ModalProps) {
  return <ModalElement size={size}>{children}</ModalElement>;
}

const ModalElement = styled.div<ModalElementType>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  ${({ size }) =>
    size &&
    {
      md: css`
        width: 380px;
      `,
      lg: css`
        width: 550px;
      `,
    }[size]}
`;

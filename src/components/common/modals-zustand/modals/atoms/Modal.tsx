import React from 'react';
import { styled } from 'twin.macro';

export default function Modal({ children }) {
  return <ModalElement>{children}</ModalElement>;
}

const ModalElement = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* TODO => width props로 처리하도록 할 예정 */
  width: 380px;
  /* min-height: 195px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: stretch; */
  background-color: #fff;
  border-radius: 6px;
`;

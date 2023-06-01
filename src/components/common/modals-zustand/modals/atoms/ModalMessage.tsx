import React from 'react';
import { styled } from 'twin.macro';

export default function ModalMessage({ children }) {
  return <MessageElement>{children}</MessageElement>;
}

const MessageElement = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 60px;
`;

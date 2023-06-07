import React from 'react';
import { styled } from 'twin.macro';

type ModalMessageProps = {
  message: string;
};

export default function ModalMessage({ message }: ModalMessageProps) {
  return <MessageElement dangerouslySetInnerHTML={{ __html: message }} />;
}

const MessageElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 60px;
`;

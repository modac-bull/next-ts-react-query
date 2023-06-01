import React from 'react';
import { styled } from 'twin.macro';

export default function ModalFooter({ children }) {
  return <FooterContainer>{children}</FooterContainer>;
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 8px;
  width: 100%;
  margin-top: auto;
  padding-bottom: 30px;
`;

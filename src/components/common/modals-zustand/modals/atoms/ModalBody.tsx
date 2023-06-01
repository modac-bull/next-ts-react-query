import React from 'react';
import { styled, theme } from 'twin.macro';

export default function ModalBody({ children }) {
  return <BodyElement>{children}</BodyElement>;
}

const BodyElement = styled.div`
  text-align: center;
  height: 100%;
  padding: 30px 25px;
  font: ${theme`typography.admin.Pretendard/14_regular`};
`;

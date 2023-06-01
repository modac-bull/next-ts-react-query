import React from 'react';
import { styled } from 'twin.macro';

export default function Overlay() {
  return <OverlayElement></OverlayElement>;
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

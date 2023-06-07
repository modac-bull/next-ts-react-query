import React from 'react';
import { styled, theme } from 'twin.macro';

type ModalHeaderProps = {
  title: string;
  onClose: () => void;
};

export default function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <ButtonClose type="button" onClick={onClose}>
        닫기
      </ButtonClose>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 0;
`;

const HeaderTitle = styled.h1`
  font: ${theme`typography.admin.Pretendard/16_bold`};
  line-height: 1.5;
`;

const ButtonClose = styled.button`
  text-indent: -9999px;
  width: 24px;
  height: 24px;
  background-image: url(/images/admin/common/icon-close.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
`;

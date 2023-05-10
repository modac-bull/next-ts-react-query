import Link from 'next/link';
import { css, styled, theme } from 'twin.macro';

/*=================================================
    관리자 공통 버튼 컴포넌트
=================================================*/

type ButtonProps = {
  size: 'sm' | 'md';
  variant: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  autofocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  children: React.ReactNode;
};

export default function Button({
  size,
  variant,
  type = 'button',
  disabled,
  autofocus,
  onClick,
  href,
  children,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonElement
          size={size}
          variant={variant}
          type={type}
          disabled={disabled}
          autofocus={autofocus}
          onClick={onClick}
        >
          {children}
        </ButtonElement>
      </Link>
    );
  }
  return (
    <ButtonElement
      size={size}
      variant={variant}
      type={type}
      disabled={disabled}
      autofocus={autofocus}
      onClick={onClick}
    >
      {children}
    </ButtonElement>
  );
}

/**
 * [Button Base Style]
 * 버튼 reset 스타일
 * 공통 border-radius 적용
 */
const ButtonBaseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
`;

/**
 * [Button Size Style]
 * 버튼 사이즈 설정
 * 'sm' | 'md'
 * width, height, padding, font
 */
const SizeStyles = {
  sm: css`
    width: auto;
    min-width: 74px;
    height: 36px;
    padding: 7px 12px;
    font: ${theme`typography.admin.Pretendard/14_medium`};
  `,
  md: css`
    width: auto;
    min-width: 130px;
    padding: 14px 16px;
    height: 50px;
    font: ${theme`typography.admin.Pretendard/14_medium`};
  `,
};

/**
 * [Button Variant Style]
 * 버튼 테마 설정
 * 'primary' | 'secondary' | 'tertiary'
 * color, background-color, border ...
 */
const VariantStyles = {
  primary: css`
    color: ${theme`colors.admin.sub-ffffff`};
    background-color: ${theme`colors.admin.primary-5767dd`};
    &:hover {
      background-color: ${theme`colors.admin.sub-384ad7`};
    }
    &:disabled {
      color: ${theme`colors.admin.sub-c4caf3`};
      background-color: ${theme`colors.admin.primary-5767dd`};
      pointer-events: none;
    }
  `,
  secondary: css`
    border: 1px solid ${theme`colors.admin.border-e2e5ec`};
    color: ${theme`colors.admin.ub-323232`};
    background-color: ${theme`colors.admin.sub-ffffff`};
    &:hover {
      background-color: ${theme`colors.admin.sub-f7f8fa`};
    }
    &:disabled {
      border-color: transparent;
      color: ${theme`colors.admin.sub-999999`};
      background-color: ${theme`colors.admin.sub-f5f5f5`};
      pointer-events: none;
    }
  `,
  tertiary: css`
    color: ${theme`colors.admin.primary-5767dd`};
    background-color: ${theme`colors.admin.sub-eeeffc`};
    &:hover {
      background-color: ${theme`colors.admin.sub-d5d9f7`};
    }
    &:disabled {
      color: ${theme`colors.admin.sub-999999`};
      background-color: ${theme`colors.admin.sub-f5f5f5`};
      pointer-events: none;
    }
  `,
};

/**
 * [Button Component Style]
 * 버튼 컴포넌트 스타일
 * size, variant props
 * 아이콘 이미지 스타일은 <Image /> 사용
 */
const ButtonElement = styled.button<ButtonProps>`
  /* Base Style */
  ${ButtonBaseStyle}
  /* Size Style */
  ${(props) => SizeStyles[props.size]}
  /* Variant Style */
  ${(props) => VariantStyles[props.variant]}
  /* Icon Image Style */
  img {
    margin-right: 6px;
  }
`;
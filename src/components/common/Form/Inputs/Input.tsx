import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import { css, styled } from 'twin.macro'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref: Ref<HTMLInputElement>) => {
    return <InputContainer type={type} ref={ref} {...props} />
  },
)

export default Input

const InputContainer = styled.input`
  width: 100%;
  min-height: 36px;
  height: 100%;
  padding: 0 10px;
  border-radius: 2px;
  /* disabled 스타일 */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #242121;
    `}
`

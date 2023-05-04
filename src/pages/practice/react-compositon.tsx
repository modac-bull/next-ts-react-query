import React, { ReactNode, useEffect, useState } from 'react'
import 'twin.macro'

interface Props {
  children: ReactNode
  value: string
  onChange: (value: string) => void
  placeholder: string
  error?: string
}

const TextFieldWithLabel = withError(withLabel(TextField))

export default function ReactCompostionPage() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setError('Error!')
    }, 5000)
  }, [])

  return (
    <div tw="bg-red-300 h-[100vh] text-center py-[200px] flex flex-col items-center">
      <TextFieldWithLabel
        value={value}
        onChange={setValue}
        placeholder={'please enter...'}
        error={error}
      >
        {/* 자유도가 증가한다. */}
        Label test ...222
      </TextFieldWithLabel>
    </div>
  )
}

/* 
  리팩토링 전

  포인트
  - label 안쓰고 싶을 땐 어떻게하는가?
    - label 옵셔널로 바꾸기 => 그렇게 하면 코드가 조금 더 지저분해진다.
    - HOC?
*/

function withLabel<P extends Props>(
  Component: React.ComponentType<P>,
): React.FC<P> {
  return ({ children, ...rest }: P) => (
    <div>
      {children && <label>{children}</label>}
      <Component {...(rest as P)} />
    </div>
  )
}

function withError<P extends Props>(
  Component: React.ComponentType<P>,
): React.FC<P & { error?: string }> {
  return ({ error, ...rest }: P & { error?: string }) => (
    <div>
      <Component {...(rest as P)} />
      {error && <div tw="text-red-500 text-5xl">{error}</div>}
    </div>
  )
}
function TextField({ value, onChange, placeholder }: Props) {
  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

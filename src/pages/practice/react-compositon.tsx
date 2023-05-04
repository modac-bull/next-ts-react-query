import React, { useEffect, useState } from 'react'
import 'twin.macro'

type TextProps = {
  label: string
  value: string
  onChange: (inputValue: string) => void
  placeholder: string
  error: string
}

export default function ReactCompostionPage() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setError('Error!')
    }, 5000)
  }, [])

  return (
    <TextField
      label="label text"
      value={value}
      onChange={setValue}
      placeholder={'please enter...'}
      error={error}
    />
  )
}

/* 
  리팩토링 전
*/

function TextField({ label, value, onChange, placeholder, error }: TextProps) {
  return (
    <div tw="bg-red-300 h-[100vh] text-center py-[200px] flex flex-col items-center">
      <label>{label}</label>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      <div>{error}</div>
    </div>
  )
}

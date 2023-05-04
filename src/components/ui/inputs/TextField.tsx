import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  value: string
  onChange: (value: string) => void
  placeholder: string
  error?: string
}

export default function TextField({ value, onChange, placeholder }: Props) {
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

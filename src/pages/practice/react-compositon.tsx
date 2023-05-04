import React, { ReactNode, useEffect, useState } from 'react'
import 'twin.macro'
import { TextField, withError, withLabel } from '../../components/ui/inputs'
const TextFieldWithErrorAndLabel = withLabel(withError(TextField))

export default function ReactCompostionPage() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setError('Error!')
    }, 5000)
  }, [])

  return (
    <div>
      <div tw="bg-red-300 h-[100vh] text-center py-[200px] flex flex-col items-center">
        <TextFieldWithErrorAndLabel
          value={value}
          onChange={setValue}
          placeholder={'please enter...'}
          error={error}
        >
          {/* 자유도가 증가한다. */}
          자유도가 증가한다..?
        </TextFieldWithErrorAndLabel>
      </div>
    </div>
  )
}

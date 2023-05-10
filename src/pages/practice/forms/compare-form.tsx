import React, { RefObject, useRef } from 'react'

import 'twin.macro'

import { useForm } from 'react-hook-form'
import {
  Input,
  InputWithHookForm,
} from '../../../components/common/Form/Inputs'

type Props = {}

export default function CompareFormPage({}: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example1: '123',
      example2: 'abc',
      example3: 'cdf',
    },
  })

  const onSubmit = (data: object) => {
    console.log('Form data:', data)
  }

  return (
    <div tw="px-[200px] bg-amber-200 h-[100vh]">
      폼 컴포넌트 예시 페이지
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* react-hook-form 사용하는 폼 */}
        <InputWithHookForm type="text" {...register('example1')} />
        <InputWithHookForm type="text" {...register('example2')} />
        <InputWithHookForm
          type="text"
          {...register('example3', {
            required: '필수 입력입니다.',
            maxLength: {
              value: 20,
              message: '최대 20글자입니다.',
            },
          })}
          errors={errors}
        />

        {/* react-hook-form 사용하지 않는 폼 */}
        <Input type="text" disabled={true} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

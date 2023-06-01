import React from 'react'

import 'twin.macro'

export default function Container({ children }) {
  return (
    <div tw="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px] border bg-white border-solid border-red-600">
      {children}
    </div>
  )
}

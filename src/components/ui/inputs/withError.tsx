import React from 'react'

import 'twin.macro'

interface Props {
  error?: string
}

export default function withError<P extends Props>(
  Component: React.ComponentType<P>,
): React.FC<P & { error?: string }> {
  return ({ error, ...rest }: P & { error?: string }) => (
    <div>
      <Component {...(rest as P)} />
      {error && <div tw="text-red-500 text-5xl">{error}</div>}
    </div>
  )
}

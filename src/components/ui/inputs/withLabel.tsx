import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function withLabel<P extends Props>(
  Component: React.ComponentType<P>,
): React.FC<P> {
  return ({ children, ...rest }: P) => (
    <div>
      {children && <label>{children}</label>}
      <Component {...(rest as P)} />
    </div>
  )
}

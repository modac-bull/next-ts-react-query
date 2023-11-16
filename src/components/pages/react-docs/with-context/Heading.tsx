import { LevelContext } from '@/context/react-docs/LevelContext'
import { useContext } from 'react'
import 'twin.macro'

type Props = {
  children: React.ReactNode
}

export default function Heading({ children }: Props) {
  const level = useContext(LevelContext)

  switch (level) {
    case 1:
      return <h1 tw="text-3xl">{children}</h1>
    case 2:
      return <h2 tw="text-2xl">{children}</h2>
    case 3:
      return <h3 tw="text-xl">{children}</h3>
    case 4:
      return <h4 tw="text-lg">{children}</h4>
    case 5:
      return <h5 tw="text-sm">{children}</h5>
    case 6:
      return <h6 tw="text-xs">{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}

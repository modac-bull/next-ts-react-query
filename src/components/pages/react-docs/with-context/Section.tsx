import { LevelContext } from '@/context/react-docs/LevelContext'
import { useContext } from 'react'
import 'twin.macro'
type Props = {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  const level = useContext(LevelContext)

  return (
    <section tw="border border-solid border-amber-700 p-[10px]">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

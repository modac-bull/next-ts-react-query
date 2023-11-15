import 'twin.macro'
type Props = {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  return (
    <section tw="border border-solid border-amber-700 p-[10px]">
      {children}
    </section>
  )
}

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <main
      className={`flex justify-center items-center flex-col mb-12 ${className}`}
    >
      {children}
    </main>
  )
}

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Main({ children, className }: Props) {
  return (
    <main className={`flex justify-center items-center flex-col ${className}`}>
      {children}
    </main>
  )
}

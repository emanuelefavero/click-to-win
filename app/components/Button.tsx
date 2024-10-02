import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Main({ children, className, onClick }: Props) {
  return (
    <button
      className={`text-2xl mt-2 w-full py-2 select-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

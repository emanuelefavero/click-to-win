import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

export default function Button({ children, type, className, onClick }: Props) {
  return (
    <button
      type={type}
      className={`text-2xl mt-2 w-full py-2 select-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

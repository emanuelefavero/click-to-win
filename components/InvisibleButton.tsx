import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

export default function Component({
  children,
  type,
  className,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`p-0 bg-transparent border-none hover:bg-transparent ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

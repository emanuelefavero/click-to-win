'use client'

import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function SubmitButton({ children, className, onClick }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className={`text-2xl mt-2 w-full py-2 select-none ${className}
        disabled:animate-pulse disabled:bg-slate-200 dark:disabled:bg-slate-900 disabled:border-slate-400 dark:disabled:border-slate-500 disabled:text-slate-400 dark:disabled:text-slate-500 disabled:opacity-90
      `}
      onClick={onClick}
      disabled={pending}
    >
      {children}
    </button>
  )
}

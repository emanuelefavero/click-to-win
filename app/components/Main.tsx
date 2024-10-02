import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='flex justify-center items-center flex-col'>
      {children}
    </main>
  )
}

import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Greet from '@/app/components/Greet'

export default function Header() {
  return (
    <header className='w-full flex items-center mb-4'>
      <UserButton
        appearance={{
          baseTheme: dark,
        }}
      />
      <Greet />
    </header>
  )
}

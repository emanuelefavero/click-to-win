import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Greet from '@/components/Greet'
import { currentUser } from '@clerk/nextjs/server'
import Logo from './Logo'

export default async function Component() {
  const user = await currentUser()

  return (
    <header className='w-full flex items-center justify-between mb-16'>
      <Logo width={33} height={33} />

      {user && (
        <span className='flex items-center'>
          <Greet />
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
          />
        </span>
      )}
    </header>
  )
}

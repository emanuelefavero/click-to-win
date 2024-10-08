import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Greet from '@/components/Greet'
import { currentUser } from '@clerk/nextjs/server'
import { refreshHomePage } from '@/app/actions'
import Logo from './Logo'

export default async function Component() {
  const user = await currentUser()

  return (
    <header className='w-full flex items-center justify-between mb-16'>
      <form action={refreshHomePage}>
        <button
          type='submit'
          className='p-0 bg-transparent border-none hover:bg-transparent'
        >
          <Logo width={33} height={33} />
        </button>
      </form>

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

import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Greet from '@/components/Greet'
import { currentUser } from '@clerk/nextjs/server'

export default async function Component() {
  const user = await currentUser()

  return (
    <header className='w-full flex items-center mb-16'>
      {user && (
        <>
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
          />
          <Greet />
        </>
      )}

      {!user && <Greet />}
    </header>
  )
}

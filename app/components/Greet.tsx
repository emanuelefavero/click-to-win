import { currentUser } from '@clerk/nextjs/server'
import { SignInButton } from '@clerk/nextjs'

export default async function Greet() {
  const user = await currentUser()

  return (
    <h1 className='ml-3 font-semibold select-none text-base'>
      {user ? (
        `Hello, ${user.firstName}`
      ) : (
        <>
          <SignInButton>
            <button className='bg-transparent border-none px-0 py-0 hover:bg-transparent'>
              <span className='mr-1'>👆</span> Click to Win
            </button>
          </SignInButton>
        </>
      )}
    </h1>
  )
}

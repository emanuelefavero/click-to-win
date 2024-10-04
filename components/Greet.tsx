import { currentUser } from '@clerk/nextjs/server'

export default async function Component() {
  const user = await currentUser()

  return (
    <h1 className='ml-3 font-semibold select-none text-base'>
      {user ? `Hello, ${user.firstName}` : '👆 Click to Win'}
    </h1>
  )
}

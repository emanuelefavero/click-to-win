import { currentUser } from '@clerk/nextjs/server'

export default async function Greet() {
  const user = await currentUser()

  return (
    <span className='ml-3 font-semibold select-none'>
      {user ? `Hello, ${user.firstName}` : ''}
    </span>
  )
}

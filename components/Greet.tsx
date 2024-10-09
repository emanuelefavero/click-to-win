import { currentUser } from '@clerk/nextjs/server'

export default async function Component() {
  const user = await currentUser()

  if (!user) return null

  return (
    <span className='mr-3 font-semibold select-none text-base'>
      <span className='hidden 3xs:inline'>Hello, </span>
      <span className='hidden 3xs:inline'>{user.firstName}</span>
    </span>
  )
}

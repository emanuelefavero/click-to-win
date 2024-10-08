import { currentUser } from '@clerk/nextjs/server'

export default async function Component() {
  const user = await currentUser()

  return (
    <span className='ml-3 font-semibold select-none text-base'>
      {/* {user ? `Hello, ${user.firstName}` : '👆 Click to Win'} */}
      {user ? (
        <>
          <span className='hidden 3xs:inline'>Hello, </span>
          <span className='hidden 4xs:inline'>{user.firstName}</span>
        </>
      ) : (
        '👆 Click to Win'
      )}
    </span>
  )
}

import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Greet() {
  const user = await currentUser()

  return (
    <>
      <h2>
        {user ? `Hello, ${user.primaryEmailAddress?.emailAddress}` : 'Hello'}
      </h2>

      <h2>{user && user.fullName}</h2>
      <h2>{user && user.firstName}</h2>

      {user && user.hasImage && (
        <Image src={user.imageUrl} alt='profile' width={50} height={50} />
      )}

      <h2>{user && user.id}</h2>
    </>
  )
}

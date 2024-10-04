import { currentUser } from '@clerk/nextjs/server'
import { SignInButton } from '@clerk/nextjs'
import { incrementCount } from '@/app/actions'
import Button from '@/components/Button'
import SubmitButton from '@/components/SubmitButton'
import Digits from '@/components/Digits'
import { getCount } from '@/utils/getCount'

export default async function Component() {
  const user = await currentUser()
  const count = await getCount()

  const digits = count.toString().split('').map(Number)

  return (
    <div className='flex flex-col items-center'>
      <Digits digits={digits} />

      {user && (
        <form action={incrementCount}>
          <SubmitButton>Play</SubmitButton>
        </form>
      )}

      {!user && (
        <SignInButton mode='redirect'>
          <Button>Sign in to play</Button>
        </SignInButton>
      )}
    </div>
  )
}

import { currentUser } from '@clerk/nextjs/server'
import { SignInButton } from '@clerk/nextjs'
import { incrementCount } from '@/app/actions'
import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'
import Button from '@/components/Button'
import SubmitButton from '@/components/SubmitButton'

async function getCount() {
  await connectDB()
  const counter = await Counter.findOne()
  return counter.count
}

export default async function Component() {
  const user = await currentUser()
  const count = await getCount()

  const digits = count.toString().split('').map(Number)

  return (
    <div className='flex flex-col items-center'>
      <div className='flex text-5xl font-bold'>
        {digits.map((digit: number, index: number) => (
          <div
            key={index}
            className='w-10 h-16 overflow-hidden relative inline-block'
          >
            {/* Create a wrapper for each digit to scroll */}
            <div
              className='transition-transform duration-500 ease-in-out absolute top-0'
              style={{ transform: `translateY(-${digit * 10}%)` }}
            >
              {/* Render numbers 0-9 to scroll through */}
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className='h-16 flex justify-center items-center select-none'
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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

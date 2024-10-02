'use client'

import data from '@/data/count.json'
import { incrementCount } from '@/app/actions'
import { useUser } from '@clerk/clerk-react'
import { SignInButton } from '@clerk/nextjs'
import Button from '@/app/components/Button'

export default function Counter() {
  const { isSignedIn } = useUser()
  const count = data.count

  const digits = count.toString().split('').map(Number)

  const handleClick = async () => {
    const newCount = count + 1

    // Reset count to 0 if it reaches 100
    if (newCount === 100) {
      await incrementCount(100)
      // Add a timeout before showing the alert
      await new Promise((resolve) => setTimeout(resolve, 100))

      alert('Congratulations! You reached 100!')
      await incrementCount(0)
      return
    }

    await incrementCount(newCount)
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex text-5xl font-bold'>
        {digits.map((digit, index) => (
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

      {isSignedIn && <Button onClick={handleClick}>Play</Button>}

      {!isSignedIn && (
        <SignInButton mode='redirect'>
          <Button>Sign in to play</Button>
        </SignInButton>
      )}
    </div>
  )
}

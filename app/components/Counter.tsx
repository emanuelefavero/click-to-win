'use client'

import { useState } from 'react'
import data from '@/data/count.json'
import { incrementCount } from '@/app/actions'

export default function Counter() {
  const [count, setCount] = useState(data.count)

  const digits = count.toString().split('').map(Number)

  const handleClick = async () => {
    const newCount = count + 1

    setCount(newCount)

    // Reset count to 0 if it reaches 100
    if (newCount === 100) {
      // Add a timeout before showing the alert
      await new Promise((resolve) => setTimeout(resolve, 50))

      alert('Congratulations! You reached 100!')
      setCount(0)
      await incrementCount(0)
      return
    }

    // Make a server call only every 10 counts
    if (newCount % 10 === 0) {
      await incrementCount(newCount)
    }
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
      <button
        className='text-2xl mt-2 w-full py-2 select-none'
        onClick={handleClick}
      >
        Play
      </button>
    </div>
  )
}

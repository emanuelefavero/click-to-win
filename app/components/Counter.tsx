'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(1)

  // Convert number to array of digits
  const digits = count.toString().split('').map(Number)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
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
                <div key={i} className='h-16 flex justify-center items-center'>
                  {i}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className='text-2xl mt-2 w-full py-2' onClick={handleClick}>
        Play
      </button>
    </div>
  )
}

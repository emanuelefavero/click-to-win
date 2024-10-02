'use client'

import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  // Convert number to array of digits
  const digits = count.toString().split('').map(Number)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className='counter-container'>
      <div className='counter'>
        {digits.map((digit, index) => (
          <div key={index} className='digit-container'>
            {/* Create a wrapper for each digit to scroll */}
            <div
              className='digit-scroller'
              style={{ transform: `translateY(-${digit * 10}%)` }}
            >
              {/* Render numbers 0-9 to scroll through */}
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className='digit'>
                  {i}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className='increment-btn' onClick={handleClick}>
        Play
      </button>
    </div>
  )
}

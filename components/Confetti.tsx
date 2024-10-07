'use client'

import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from '@/hooks/useWindowSize'

export default function Component() {
  const { width, height } = useWindowSize()

  return <Confetti width={width} height={height} />
}

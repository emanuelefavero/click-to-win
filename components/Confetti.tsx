'use client'

import Confetti from 'react-confetti'
import useWindowSize from '@/hooks/useWindowSize'

export default function Component() {
  const { width, height } = useWindowSize()

  return (
    <Confetti
      width={width}
      height={height}
      colors={[
        '#198441',
        '#22b975',
        '#0b3b1d',
        '#5e8532',
        '#07896d',
        '#42e17c',
        '#955a2a',
      ]}
      wind={0.02}
      opacity={0.8}
      numberOfPieces={150}
    />
  )
}

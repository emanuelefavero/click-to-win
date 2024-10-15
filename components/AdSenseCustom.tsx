'use client'

import { useEffect } from 'react'

// TIP: This ad unit was added in the AdSense account with the Ads -> By ad unit -> Create ad unit -> Display ads section

export default function Component() {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-5142992130929076'
      data-ad-slot='8332003977'
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  )
}

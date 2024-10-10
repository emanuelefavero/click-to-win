import Script from 'next/script'

export default function AdSense() {
  return (
    <Script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5142992130929076'
      crossOrigin='anonymous'
      strategy='afterInteractive'
    />
  )
}

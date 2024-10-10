import Script from 'next/script'

export default function AdSense() {
  return (
    <>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5142992130929076'
        crossOrigin='anonymous'
        strategy='afterInteractive'
      />

      <Script
        async
        src='https://fundingchoicesmessages.google.com/i/pub-5142992130929076?ers=1'
      />

      <Script id='googlefc-script' strategy='lazyOnload'>
        {`(function() {
            function signalGooglefcPresent() {
              if (!window.frames['googlefcPresent']) {
                if (document.body) {
                  const iframe = document.createElement('iframe');
                  iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                  iframe.style.display = 'none';
                  iframe.name = 'googlefcPresent';
                  document.body.appendChild(iframe);
                } else {
                  setTimeout(signalGooglefcPresent, 0);
                }
              }
            }
            signalGooglefcPresent();
        })();`}
      </Script>
    </>
  )
}

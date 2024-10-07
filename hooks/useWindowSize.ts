import { useState, useEffect } from 'react'

export default function useWindowSize() {
  // Initialize state with window width and height
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Call handler immediately to set the initial size
    handleResize()

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures the effect runs only on mount and unmount

  return windowSize
}

interface Props {
  digits: number[]
}

export default async function Component({ digits }: Props) {
  return (
    <div className='flex text-5xl font-bold mb-1'>
      {digits.map((digit: number, index: number) => (
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
  )
}

import Image from 'next/image'

interface Props {
  width: number
  height: number
  className?: string
}

export default function Component({ width, height, className }: Props) {
  return (
    <Image
      className={`select-none ${className}`}
      src='/logo.png'
      width={width}
      height={height}
      alt='Logo'
    />
  )
}

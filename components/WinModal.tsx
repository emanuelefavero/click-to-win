import Link from 'next/link'

export default function Component() {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto'>
      <div className='bg-[#f0f9ff] dark:bg-[#030816] border border-slate-400 dark:border-slate-600 rounded-lg shadow-md shadow-slate-200 dark:shadow-black px-5 py-4 text-center relative max-w-prose animate-slideFromTop'>
        <h2>You Won! 🎉</h2>

        <Link href='/'>Close</Link>
      </div>
    </div>
  )
}

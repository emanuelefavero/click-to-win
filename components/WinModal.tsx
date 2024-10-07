import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

export default async function Component() {
  const user = await currentUser()

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto'>
      <div className='bg-[#f0f9ff] dark:bg-[#030816] border border-slate-400 dark:border-slate-600 rounded-lg shadow-md shadow-slate-200 dark:shadow-black px-5 py-6 text-center relative max-w-md animate-slideFromTop'>
        <h2 className='text-2xl mb-5'>
          Congratulations
          {user && `, ${user.firstName}`}! 🎉
        </h2>

        <p className='mb-3 text-slate-600 dark:text-slate-400'>
          You are the first to reach{' '}
          <span className='font-bold text-slate-600 dark:text-slate-300'>
            100
          </span>
          ! 🏆
        </p>

        <p className='mb-4 text-slate-600 dark:text-slate-400'>
          Please check your{' '}
          {user && (
            <span className='font-bold text-slate-600 dark:text-slate-300'>
              {user.primaryEmailAddress?.emailAddress}
            </span>
          )}{' '}
          email for more details on how to claim your prize.
        </p>

        <Link href='/' className='text-2xl select-none'>
          Close
        </Link>
      </div>
    </div>
  )
}

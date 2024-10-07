import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

// TODO: Add name and email of winner (use Clerk server side utilities) (also ask ChatGPT to help you crate the text for the modal)

export default async function Component() {
  const user = await currentUser()

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto'>
      <div className='bg-[#f0f9ff] dark:bg-[#030816] border border-slate-400 dark:border-slate-600 rounded-lg shadow-md shadow-slate-200 dark:shadow-black px-5 py-6 text-center relative max-w-sm animate-slideFromTop'>
        <h2 className='text-lg'>
          Congratulations{user && ` ${user.firstName}`}! 🎉
        </h2>

        <p>You are the first to reach 100! 🏆</p>

        <p>
          Please check your{' '}
          {user && (
            <span className='font-bold'>
              {user.primaryEmailAddress?.emailAddress}
            </span>
          )}{' '}
          email for more details on how to claim your prize.
        </p>

        <Link href='/'>Close</Link>
      </div>
    </div>
  )
}

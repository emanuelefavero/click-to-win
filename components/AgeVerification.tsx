import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Component() {
  async function yes() {
    'use server'

    cookies().set('isOver18', 'true', {
      // Expires in 2 years
      maxAge: 60 * 60 * 24 * 365 * 2, // 2 years in seconds
    })
    redirect('/')
  }

  async function no() {
    'use server'

    cookies().set('isOver18', 'false', {
      maxAge: 0, // delete the cookie immediately
    })
    redirect('https://google.com')
  }

  return (
    <>
      <h2 className='text-3xl font-bold select-none mb-7'>
        Are you 18 or older?
      </h2>

      <div className='flex gap-3'>
        <form action={yes}>
          <button type='submit'>Yes - Enter</button>
        </form>

        <form action={no}>
          <button type='submit'>No - Exit</button>
        </form>
      </div>
    </>
  )
}

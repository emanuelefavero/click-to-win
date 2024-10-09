import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import SubmitButton from '@/components/SubmitButton'
import SubmitButtonMuted from '@/components/SubmitButtonMuted'

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
      <h2 className='text-3xl font-bold select-none mb-7 text-center'>
        Are you 18 or older?
      </h2>

      <div className='flex justify-center items-center flex-wrap gap-x-3 gap-y-2'>
        <form action={yes}>
          <SubmitButton className='text-lg 4xs:min-w-[7.85rem]'>
            Yes<span className='hidden 4xs:inline'> - Enter</span>
          </SubmitButton>
        </form>

        <form action={no}>
          <SubmitButtonMuted className='text-lg 4xs:min-w-[7.85rem]'>
            No<span className='hidden 4xs:inline'> - Exit</span>
          </SubmitButtonMuted>
        </form>
      </div>
    </>
  )
}

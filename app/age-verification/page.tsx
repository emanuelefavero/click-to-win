import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Page() {
  async function yes() {
    'use server'

    cookies().set('isOver18', 'true')
    redirect('/')
  }

  async function no() {
    'use server'

    cookies().set('isOver18', 'false')
    redirect('https://google.com')
  }

  return (
    <>
      <h2>Age Verification</h2>

      <p>Are you 18 or older?</p>

      <form action={yes}>
        <button type='submit'>Yes</button>
      </form>

      <form action={no}>
        <button type='submit'>No</button>
      </form>
    </>
  )
}

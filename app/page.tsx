import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Title from '@/components/Title'
import Counter from '@/components/Counter'
import Modal from '@/components/WinModal'
import Confetti from '@/components/Confetti'

interface SearchParamProps {
  searchParams: Record<string, string> | null | undefined
}

export default async function Home({ searchParams }: SearchParamProps) {
  const user = await currentUser()
  const cookieStore = cookies()
  const isOver18 = cookieStore.get('isOver18')?.value === 'true'

  if (user && !isOver18) redirect('/age-verification')

  const win = searchParams?.win

  return (
    <>
      <Header />
      <Main>
        <Title />
        <Counter />
      </Main>

      {win && <Modal />}
      {win && <Confetti />}
    </>
  )
}

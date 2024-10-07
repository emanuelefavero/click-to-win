import Header from '@/components/Header'
import Counter from '@/components/Counter'
import Main from '@/components/Main'
import Modal from '@/components/WinModal'
import Confetti from '@/components/Confetti'

interface SearchParamProps {
  searchParams: Record<string, string> | null | undefined
}

export default function Home({ searchParams }: SearchParamProps) {
  const win = searchParams?.win

  return (
    <>
      <Header />
      <Main>
        <Counter />
      </Main>

      {win && <Modal />}

      {win && <Confetti />}
    </>
  )
}

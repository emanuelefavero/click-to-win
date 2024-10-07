import Header from '@/components/Header'
import Counter from '@/components/Counter'
import Main from '@/components/Main'
import Modal from '@/components/WinModal'

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
    </>
  )
}

import Header from '@/app/components/Header'
import Counter from '@/app/components/Counter'
import Main from '@/app/components/Main'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Main>
        <Header />
        <Counter />
      </Main>

      <Link href='/test'>Test</Link>
    </>
  )
}

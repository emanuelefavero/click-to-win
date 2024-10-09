import Header from '@/components/Header'
import Main from '@/components/Main'
import Title from '@/components/Title'
import AgeVerification from '@/components/AgeVerification'

export default function Page() {
  return (
    <>
      <Header />
      <Main>
        <Title />
        <AgeVerification />
      </Main>
    </>
  )
}

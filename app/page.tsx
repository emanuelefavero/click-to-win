import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Header from '@/app/components/Header'
import Counter from '@/app/components/Counter'

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Header />
        <main className='flex justify-center items-center'>
          <Counter />
        </main>
      </SignedIn>
    </>
  )
}

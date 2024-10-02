import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Header />
      </SignedIn>
    </>
  )
}

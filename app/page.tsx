import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Greet from '@/app/components/Greet'

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            baseTheme: dark,
          }}
        />
      </SignedIn>

      <h1>Click to Win</h1>

      <Greet />
    </>
  )
}

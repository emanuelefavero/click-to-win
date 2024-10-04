import { serverURL } from '@/utils/serverURL'
import { incrementCount } from '@/app/actions'

export default async function Page() {
  const response = await fetch(`${serverURL}/api/counter`)
  const { count } = await response.json()

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <form action={incrementCount}>
        <button type='submit'>Increment Counter</button>
      </form>
    </div>
  )
}

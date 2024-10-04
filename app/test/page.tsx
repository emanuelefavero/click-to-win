import { incrementCount } from '@/app/actions'
import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'

async function getCount() {
  await connectDB()
  const counter = await Counter.findOne()
  return counter.count
}

export default async function Page() {
  const count = await getCount()

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <form action={incrementCount}>
        <button type='submit'>Increment Counter</button>
      </form>
    </div>
  )
}

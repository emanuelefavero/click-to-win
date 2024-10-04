import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'

export async function getCount() {
  await connectDB()
  const counter = await Counter.findOne()
  return counter.count
}

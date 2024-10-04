// app/api/counter/route.ts
import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'

export async function GET() {
  await connectDB()

  const counter = await Counter.findOne()

  return Response.json({ count: counter.count })
}

// Increase the count by 1 every time the POST request is made
export async function POST() {
  await connectDB()

  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  )

  return Response.json({ count: counter.count })
}

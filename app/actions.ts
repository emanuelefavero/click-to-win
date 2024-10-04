'use server'

// import fs from 'fs'
// import path from 'path'
// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

// const filePath = path.join(process.cwd(), 'data/count.json')

// export async function incrementCount(newCount: number) {
//   // Read the current count from the JSON file
//   const data = fs.readFileSync(filePath, 'utf-8')
//   const count = JSON.parse(data).count

//   // Only update the JSON file if the new count is greater
//   if (newCount > count || newCount === 0) {
//     fs.writeFileSync(filePath, JSON.stringify({ count: newCount }), 'utf-8')
//   }

//   revalidatePath('/')
//   redirect('/')
// }

// --------------------------------------------

import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// export async function GET() {
//   await connectDB()

//   const counter = await Counter.findOne()

//   return Response.json({ count: counter.count })
// }

// Increase the count by 1 every time the POST request is made
export async function incrementCount() {
  await connectDB()

  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  )

  await counter.save()

  revalidatePath('/test')
  redirect('/test')

  // return Response.json({ count: counter.count })
}

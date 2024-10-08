'use server'

import connectDB from '@/utils/connectDB'
import Counter from '@/models/Counter'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Increase the count by 1 every time the POST request is made, if the count is equal to 100, reset the count to 0
export async function incrementCount() {
  await connectDB()

  const counter = await Counter.findOne()

  if (counter.count === 99) {
    counter.count = 0

    await counter.save()

    revalidatePath('/')
    redirect('/?win=true') // open the win modal
  } else {
    counter.count++

    await counter.save()

    revalidatePath('/')
    redirect('/')
  }
}

// Refresh the page
export async function refreshHomePage() {
  revalidatePath('/')
  redirect('/')
}

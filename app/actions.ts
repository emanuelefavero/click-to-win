'use server'

import { revalidatePath } from 'next/cache'
import fs from 'fs'

export async function incrementCount(count: number) {
  fs.writeFileSync('./data/count.json', JSON.stringify({ count: count + 1 }))
  revalidatePath('/')

  // return count + 1
}

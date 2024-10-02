'use server'

import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'

const filePath = path.join(process.cwd(), 'data/count.json')

export async function incrementCount(newCount: number) {
  // Read the current count from the JSON file
  const data = fs.readFileSync(filePath, 'utf-8')
  const count = JSON.parse(data).count

  // Only update the JSON file if the new count is greater
  if (newCount > count) {
    fs.writeFileSync(filePath, JSON.stringify({ count: newCount }), 'utf-8')
  }

  revalidatePath('/')
}

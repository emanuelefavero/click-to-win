import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(MONGODB_URI)
  } catch (error) {
    console.error(error)
  }
}

export default connectDB

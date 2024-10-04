// models/Counter.ts
import mongoose, { Schema, Document } from 'mongoose'

interface ICounter extends Document {
  count: number
}

const CounterSchema: Schema = new Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
})

const Counter =
  mongoose.models.Counter || mongoose.model<ICounter>('Counter', CounterSchema)

export default Counter

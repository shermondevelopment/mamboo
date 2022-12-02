import mongoose from 'mongoose'

/** library uuid */
import { v4 } from 'uuid'

const userSchema = new mongoose.Schema({
  _id: { type: String, default: v4 },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export default mongoose.model('users', userSchema)

import mongoose from 'mongoose'

/** library uuid */
import { v4 } from 'uuid'

const listSchema = new mongoose.Schema({
  _id: { type: String, default: v4 },
  title: { type: String, required: true },
  user_id: { type: String, required: true },
  painting_id: { type: String, required: true }
})

export default mongoose.model('list', listSchema)

import mongoose from 'mongoose'

/** library uuid */
import { v4 } from 'uuid'

const members = new mongoose.Schema({
  _id: { type: String, default: v4 },
  email: { type: String, required: true }
})

const taskSchema = new mongoose.Schema({
  _id: { type: String, default: v4 },
  content: { type: String, required: true },
  user_id: { type: String, required: true },
  list_id: { type: String, required: true },
  position_task: { type: Number, default: 0 },
  members: [members]
})

export default mongoose.model('tasks', taskSchema)

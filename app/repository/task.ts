import taskSchema from '../schemas/task'
import { TaskBody, TaskMembers } from '../services/task-service'

export const createTaskRepository = async (
  content: string,
  user_id: string,
  list_id: string
) => {
  await taskSchema.create({ content, user_id, list_id })
}

export const findAllTaskRepository = async () => {
  return await taskSchema.find()
}

export const findTaskRepository = async (task_id: string) => {
  return await taskSchema.findOne({ _id: task_id })
}

export const deleteTaskRepository = async (task_id: string) => {
  await taskSchema.deleteOne({ _id: task_id })
}

export const updateTaskRepository = async (
  taskData: TaskBody,
  task_id: string
) => {
  await taskSchema.updateOne({ _id: task_id }, { ...taskData })
}

export const AddMemberTaskRepository = async (
  members: Array<TaskMembers>,
  task_id: string
) => {
  await taskSchema.updateOne({ _id: task_id }, { members })
}

export const RemoveMemberTaskRepository = async (members: TaskMembers) => {
  await taskSchema.update({}, { $pull: { members: { email: members.email } } })
}

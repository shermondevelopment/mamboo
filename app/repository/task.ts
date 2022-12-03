import taskSchema from '../schemas/task'

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

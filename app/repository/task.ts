import taskSchema from '../schemas/task'

export const createTaskRepository = async (
  content: string,
  user_id: string,
  list_id: string
) => {
  await taskSchema.create({ content, user_id, list_id })
}

export const findTaskRepository = async () => {
  return await taskSchema.find()
}

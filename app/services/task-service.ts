/** task repository */
import { createTaskRepository, findTaskRepository } from '../repository/task'

export const NewTaskService = async (
  content: string,
  user_id: string,
  list_id: string
) => {
  await createTaskRepository(content, user_id, list_id)
}

export const FindTaskService = async () => {
  const tasks = await findTaskRepository()
  return tasks
}

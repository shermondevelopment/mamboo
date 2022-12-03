/** task repository */
import { createTaskRepository } from '../repository/task'

export const NewTaskService = async (
  content: string,
  user_id: string,
  list_id: string
) => {
  await createTaskRepository(content, user_id, list_id)
}

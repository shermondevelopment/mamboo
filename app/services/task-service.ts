/** task repository */
import {
  createTaskRepository,
  findAllTaskRepository,
  findTaskRepository,
  deleteTaskRepository
} from '../repository/task'
import AppError from '../utils/app-error'

export const NewTaskService = async (
  content: string,
  user_id: string,
  list_id: string
) => {
  await createTaskRepository(content, user_id, list_id)
}

export const FindTaskService = async () => {
  const tasks = await findAllTaskRepository()
  return tasks
}

export const DeleteTaskService = async (task_id: string) => {
  const findTask = await findTaskRepository(task_id)

  if (!findTask) {
    return AppError(404, 'task not exists')
  }

  await deleteTaskRepository(task_id)
}

/** task repository */
import {
  createTaskRepository,
  findAllTaskRepository,
  findTaskRepository,
  deleteTaskRepository,
  updateTaskRepository,
  AddMemberTaskRepository,
  RemoveMemberTaskRepository
} from '../repository/task'

/** utils */
import AppError from '../utils/app-error'

export type TaskMembers = {
  email: string
}

export type TaskBody = {
  content: string
  position_task: string
}

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

export const UpdateTaskService = async (
  paramsData: TaskBody,
  task_id: string
) => {
  const findTask = await findTaskRepository(task_id)

  if (!findTask) {
    return AppError(404, 'task not exists')
  }

  await updateTaskRepository(paramsData, task_id)
}

export const AddMembersService = async (
  members: Array<TaskMembers>,
  task_id: string
) => {
  const findTask = await findTaskRepository(task_id)

  if (!findTask) {
    return AppError(404, 'task not exists')
  }

  await AddMemberTaskRepository(members, task_id)
}

export const RemoveMembersService = async (
  members: Array<TaskMembers>,
  task_id: string
) => {
  const findTask = await findTaskRepository(task_id)

  if (!findTask) {
    return AppError(404, 'task not exists')
  }

  for (let i = 0; i < members.length; i++) {
    await RemoveMemberTaskRepository(members[i])
  }
}

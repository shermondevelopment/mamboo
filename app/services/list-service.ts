/** repository */
import {
  createNewList,
  findListByPaintingRepository,
  findSingleListRepository,
  updateListRepository,
  DeleteListRepository
} from '../repository/list'

import { findPaintingRepository } from '../repository/painting'
import { findTaskByListId } from '../repository/task'

type TaskResponse = {
  _id: string
  content: string
  user_id: string
  list_id: string
  position_task: number
  members: Array<{
    _id: string
    email: string
  }>
}

type TaskWithList = {
  _id: string
  title: string
  user_id: string
  painting_id: string
  task: Array<TaskResponse>
}

/** utils */
import AppError from '../utils/app-error'
import { TaskBody, TaskMembers } from './task-service'

export const CreateListService = async (
  title: string,
  painting_id: string,
  user_id: string
) => {
  const searchPainting = await findPaintingRepository(painting_id)

  if (!searchPainting) {
    return AppError(404, 'painting not exists')
  }

  await createNewList(title, painting_id, user_id)
}

export const GetAllListByPaintingService = async (
  painting_id: string,
  user_id: string
) => {
  const list = await findListByPaintingRepository(painting_id, user_id)

  if (!list) {
    return AppError(404, 'list not exists')
  }

  return list
}

export const UpdateListService = async (list_id: string, title: string) => {
  const listExist = await findSingleListRepository(list_id)

  if (!listExist) {
    return AppError(404, 'list not exists')
  }

  await updateListRepository(list_id, title)
}

export const DeleteListService = async (list_id: string) => {
  const listExist = await findSingleListRepository(list_id)

  if (!listExist) {
    return AppError(404, 'list not exists')
  }

  await DeleteListRepository(list_id)
}

export const GetAllListHowTaskService = async (
  user_id: string,
  painting_id: string
) => {
  const list = await findListByPaintingRepository(painting_id, user_id)

  if (!list) {
    return AppError(404, 'list not exists')
  }

  const newList: any = []

  for await (const listData of list) {
    const getTask = await findTaskByListId(listData._id)
    newList.push({ listData, task: getTask })
  }

  return newList
}

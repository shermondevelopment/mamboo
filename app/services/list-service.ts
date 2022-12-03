/** repository */
import {
  createNewList,
  findListByPaintingRepository,
  findSingleListRepository,
  updateListRepository
} from '../repository/list'
import { findPaintingRepository } from '../repository/painting'

/** utils */
import AppError from '../utils/app-error'

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

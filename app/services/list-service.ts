/** repository */
import { createNewList } from '../repository/list'
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

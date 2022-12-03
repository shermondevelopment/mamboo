/** repository */
import {
  createPaintingRepository,
  ListAllPaintingRepository,
  findPaintingRepository,
  updatePaintingRepository,
  DeletePaintingRepository
} from '../repository/painting'
import AppError from '../utils/app-error'

type PaintingModel = {
  title: string
  user_id: string
}

export const CreatePaintingService = async (painting: PaintingModel) => {
  await createPaintingRepository(painting.title, painting.user_id)
}

export const ListAllPaintingService = async (user_id: string) => {
  const painting = ListAllPaintingRepository(user_id)
  return painting
}

export const UpdatePaintingService = async (
  paintingEditParams: PaintingModel & { painting_id: string }
) => {
  const findPainting = await findPaintingRepository(
    paintingEditParams.painting_id
  )

  if (!findPainting) {
    return AppError(404, 'painting does not exist')
  }

  await updatePaintingRepository(
    paintingEditParams.painting_id,
    paintingEditParams.title
  )
}

export const DeletePaintingService = async (
  painting_id: string,
  user_id: string
) => {
  const findPainting = await findPaintingRepository(painting_id)

  if (!findPainting) {
    return AppError(404, 'painting does not exist')
  }

  if (findPainting.user_id !== user_id) {
    return AppError(403, 'user cannot delete a frame that is not his')
  }

  await DeletePaintingRepository(painting_id)
}

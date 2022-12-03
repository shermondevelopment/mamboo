/** repository */
import {
  createPaintingRepository,
  ListAllPaintingRepository,
  findPaintingRepository,
  updatePaintingRepository
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

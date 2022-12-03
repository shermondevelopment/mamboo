/** repository */
import {
  createPaintingRepository,
  ListAllPaintingRepository
} from '../repository/painting'

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

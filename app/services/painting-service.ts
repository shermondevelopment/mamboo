/** repository */
import { createPaintingRepository } from '../repository/painting'

type PaintingModel = {
  title: string
  user_id: string
}

const CreatePaintingService = async (painting: PaintingModel) => {
  await createPaintingRepository(painting.title, painting.user_id)
}

export default CreatePaintingService

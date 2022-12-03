/** user schema */
import paintingSchema from '../schemas/painting'

export const createPaintingRepository = async (
  title: string,
  user_id: string
) => {
  await paintingSchema.create({ title, user_id })
}

/** user schema */
import paintingSchema from '../schemas/painting'

export const createPaintingRepository = async (
  title: string,
  user_id: string
) => {
  await paintingSchema.create({ title, user_id })
}

export const ListAllPaintingRepository = async (user_id: string) => {
  return await paintingSchema.find({ user_id })
}

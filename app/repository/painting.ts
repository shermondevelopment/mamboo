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

export const findPaintingRepository = async (painting_id: string) => {
  return await paintingSchema.findOne({ _id: painting_id })
}

export const updatePaintingRepository = async (
  painting_id: string,
  title: string
) => {
  await paintingSchema.updateOne({ _id: painting_id }, { title })
}

export const DeletePaintingRepository = async (painting_id: string) => {
  await paintingSchema.deleteOne({ _id: painting_id })
}

/** list schema */
import listSchema from '../schemas/list'

export const createNewList = async (
  title: string,
  painting_id: string,
  user_id: string
) => {
  await listSchema.create({ title, painting_id, user_id })
}

export const findListByPaintingRepository = async (
  painting_id: string,
  user_id: string
) => {
  return await listSchema.find({ painting_id, user_id })
}

export const findSingleListRepository = async (list_id: string) => {
  return await listSchema.findOne({ _id: list_id })
}

export const updateListRepository = async (list_id: string, title: string) => {
  await listSchema.updateOne({ _id: list_id }, { title })
}

export const DeleteListRepository = async (list_id: string) => {
  await listSchema.deleteOne({ _id: list_id })
}

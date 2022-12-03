/** list schema */
import listSchema from '../schemas/list'

export const createNewList = async (
  title: string,
  painting_id: string,
  user_id: string
) => {
  await listSchema.create({ title, painting_id, user_id })
}

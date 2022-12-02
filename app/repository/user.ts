/** user schema */
import userSchema from '../schemas/user'

export const findUser = async (email: string) => {
  return await userSchema.findOne({ email })
}

export const createUser = async (email: string, password: string) => {
  await userSchema.create({ email, password })
}

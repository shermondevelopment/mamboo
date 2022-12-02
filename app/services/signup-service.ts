/** repository user */
import { findUser, createUser } from '../repository/user'

/** utils */
import AppError from '../utils/app-error'

/** bcypt */
import bcrypt from 'bcrypt'

export type Auth = {
  email: string
  password: string
}

const SignupService = async (user: Auth) => {
  const userExist = await findUser(user.email)

  if (userExist) {
    return AppError(401, 'email already exists')
  }

  createUser(user.email, await bcrypt.hash(user.password, 12))
}

export default SignupService

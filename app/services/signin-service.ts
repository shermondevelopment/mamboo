/* repository */
import { findUser } from '../repository/user'

/** type */
import { Auth } from './signup-service'

/** utils */
import AppError from '../utils/app-error'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const SignupService = async (user: Auth) => {
  const userExist = await findUser(user.email)

  if (!userExist) {
    return AppError(404, 'unregistered user')
  }

  if (!(await bcrypt.compare(user.password, userExist.password))) {
    return AppError(403, 'wrong password')
  }

  return jwt.sign({ id: userExist.id }, process.env.JWT_TOKEN as string)
}

export default SignupService

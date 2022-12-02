const AppError = (statusCode: number, message: string) => {
  throw {
    statusCode,
    message
  }
}

export default AppError

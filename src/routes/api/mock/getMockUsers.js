const mockUserService = require('@services/mock/getMockUser.service')
const HttpException = require('@exceptions/HttpException')

let getMockUser = async(req, res, next) => {
  try {
    const { responseData, statusCode } = await mockUserService.getUsers()
    res.sendSuccessResponse(responseData, statusCode)
  } catch(err) {
    next(err)
  }
}

module.exports = getMockUser

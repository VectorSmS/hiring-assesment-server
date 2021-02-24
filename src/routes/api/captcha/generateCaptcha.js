const generateCaptchaService = require('@services/captcha/generateCaptcha.service')
const HttpException = require('@exceptions/HttpException')

let generateCaptcha = async(req, res, next) => {
  try {
    const { responseData, statusCode } = await generateCaptchaService.getCaptcha()
    res.sendSuccessResponse(responseData, statusCode)
  } catch(err) {
    next(err)
  }
}

module.exports = generateCaptcha

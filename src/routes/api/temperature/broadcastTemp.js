const temperatureService = require('@services/temp/temperature.service')
const HttpException = require('@exceptions/HttpException')

let broadCastTemp = async(req, res, next) => {
  try {
    const requestObject = req.body
    if(requestObject.temp === undefined || requestObject.temp == null) {
      throw new HttpException('Temperature Required', 400)
    }
    const { responseData, statusCode } = await temperatureService.broadcastTemp(requestObject)
    res.sendSuccessResponse(responseData, statusCode)
  } catch(err) {
    next(err)
  }
}

module.exports = broadCastTemp

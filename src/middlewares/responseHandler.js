const emitter = require('@config/emitter')

let addResponseMethods = function(req, res, next) {
  res.sendSuccessResponse = function(responseData, statusCode = 200) {
    var successObject = {
      success: true,
      status: statusCode,
      data: responseData
    }

    emitter.emit('success', successObject)
    res.status(statusCode).json(successObject)
  }

  res.sendErrorResponse = function(errorCode, errorMessage) {
    var errorObject = {
      success: false,
      message: errorMessage,
      status: errorCode
    }

    emitter.emit('exception', errorObject)
    res.status(errorCode).json(errorObject)
  }

  next()
}

module.exports = addResponseMethods

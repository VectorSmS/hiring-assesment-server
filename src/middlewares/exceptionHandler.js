const emitter = require('@config/emitter')
const HttpException = require('@exceptions/HttpException')

function uncaughtExceptionHandler(err, req, res, next) {
  emitter.emit('exception', err)
  if(err instanceof HttpException) {
    var errorObject = {
      success: false,
      message: err.message,
      status: err.status
    }
    res.status(err.status).json(errorObject)
  } else {
    if(process.env.NODE_ENV == 'production') {
      res.status(500).json({ message: 'Something went wrong', success: false })
    } else {
      res.status(500).json({ 'stack': err.stack })
    }
  }
}

module.exports = uncaughtExceptionHandler

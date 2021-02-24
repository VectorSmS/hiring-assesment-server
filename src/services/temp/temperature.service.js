const emitter = require('@config/emitter')
const StatusCodes = require('http-status-codes')
const HttpException = require('@exceptions/HttpException')

let broadcastTemp = async(requestObject) => {
  const temp = requestObject.temp
  emitter.emit('broadcast', temp)
  return { responseData: { 'data': 'Message Send' }, statusCode: StatusCodes.CREATED }
}

module.exports = {
  broadcastTemp: broadcastTemp
}

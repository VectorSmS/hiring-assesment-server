class HttpException extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.status = statusCode
  }
}

module.exports = HttpException

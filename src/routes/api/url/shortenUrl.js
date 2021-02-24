const shortenService = require('@services/urlshortener/shorten.service')
const HttpException = require('@exceptions/HttpException')
const URL = require('url').URL

let getShortUrl = async(req, res, next) => {
  try {
    const requestObject = req.body
    const actualUrl = requestObject.url
    if(actualUrl === undefined || actualUrl == null) {
      throw new HttpException("URL Required", 400)
    }
    if(!isValidUrl(actualUrl)) {
      throw new HttpException("Invalid URL", 422)
    }
    const { responseData, statusCode } = await shortenService.getShortUrl(requestObject);
    res.sendSuccessResponse(responseData, statusCode)
  } catch(err) {
    next(err)
  }
}

const isValidUrl = (stringUrl) => {
  try {
    new URL(stringUrl)
    return true
  } catch(err) {
    console.log(err)
    return false
  }
}

module.exports = getShortUrl

const StatusCodes = require('http-status-codes')
const HttpException = require('@exceptions/HttpException')
const axios = require('axios')

let getShortUrl = async(requestObject) => {
  let shortenedUrl = await getUrl(requestObject.url)
  return { responseData: { 'shortUrl': shortenedUrl }, statusCode: StatusCodes.CREATED }
}

async function getUrl(longUrl) {
  try {
    let response = await axios({
      method: 'post',
      url: process.env.BITLY_URL,
      data: {
        long_url: longUrl
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.BITLY_KEY
      }
    })
    return response.data.link
  } catch(err) {
    let statusCode = err.response.status
    if(statusCode == 403) {
      throw new HttpException("Something went wrong", 500)
    } else {
        throw new HttpException(err.response.data.description, statusCode)
    }
  }
}

module.exports = {
  getShortUrl: getShortUrl
}

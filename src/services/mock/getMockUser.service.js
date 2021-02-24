const StatusCodes = require('http-status-codes')
const HttpException = require('@exceptions/HttpException')
const axios = require('axios')
const OFFSET = 10

let getUsers = async() => {
  let responseArray = []
  await getUserData(1, responseArray)
  return { responseData: responseArray , statusCode: StatusCodes.CREATED }
}

async function getUserData(page, responseArray) {
  try {
    let response = await axios.get(process.env.MOCK_API_BASE_URL+'/user?page='+page+'&limit='+OFFSET)
    if(response.data === undefined || response.data == null || response.data.length == 0) {
      return
    }
    for(const element of response.data) {
      responseArray.push(element)
    }
    await getUserData(page+1, responseArray)
  } catch(err) {
    let statusCode = err.response.status
    if(statusCode == 403) {
      throw new HttpException("Something went wrong", 500)
    } else {
      throw new HttpException(err.response.data, statusCode)
    }
  }
}

module.exports = {
  getUsers: getUsers
}

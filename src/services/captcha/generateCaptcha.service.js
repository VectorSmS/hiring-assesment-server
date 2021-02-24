const StatusCodes = require('http-status-codes')
const HttpException = require('@exceptions/HttpException')
const Canvas = require('canvas')
const randomstring = require('randomstring')

let getCaptcha = async() => {
  const randomAlphaNumericValue = getRandomAlphaNumericValue()
  const captcha  = generate(randomAlphaNumericValue, 300, 150)
  return { responseData: { 'captcha': captcha.image, 'captchaValue': captcha.text }, statusCode: StatusCodes.CREATED }
}

const getRandomAlphaNumericValue =() => {
  return randomstring.generate({
    length: 8,
    charset: 'alphanumeric'
  })
}

const generate = (captchaValue, width, height) => {
  const canvas = Canvas.createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, width, height)
  ctx.font = width * 0.15 + 'px serif'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.fillStyle = "black"
  ctx.fillText(captchaValue, width/2, height/2);
  return {
    image: canvas.toDataURL(),
    text: captchaValue
  }
}

module.exports = {
  getCaptcha: getCaptcha
}

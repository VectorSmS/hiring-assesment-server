const bodyParser = require('body-parser')
var cors = require('cors');
require('@subscribers')
const exceptionHandler = require('@middlewares/exceptionHandler')
const responseHandler = require('@middlewares/responseHandler')

let loadExpress = async({ app }) => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.use(responseHandler)
  app.use(require('@routes'))
  app.use(exceptionHandler)
}


module.exports = {
  init: loadExpress
}

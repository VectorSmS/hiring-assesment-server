const expressLoader = require('./expressLoader')
const socketLoader = require('./socketLoader')

let loadApp = async({ app }) => {
  await expressLoader.init({ 'app': app })
  console.log('Express Server Inititalized')
}

let loadSocket = async ({ server }) => {
  await socketLoader.init({ 'server': server })
  console.log('Socket Initialized')
}

module.exports = {
  initExpress: loadApp,
  initSocket: loadSocket
}

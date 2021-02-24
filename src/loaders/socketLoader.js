let loadSocket = async({ server }) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: true,
      credentials: true,
      methods: ["GET", "POST"]
    }
  })
  io.on('connection', client => {
    client.on('event', data => {
      console.log(data)
    })
    client.on('disconnect', () => {
      console.log('Client Disconnected')
    })
  })
}

module.exports = {
  init: loadSocket
}
// let loadSocket = async({ serv }) => {
// const server = require('http').createServer()
// const io = require('socket.io')(server)
// io.on('connection', client => {
// client.on('event', data => {
//   console.log(data)
// })
// client.on('disconnect', () => {
//   console.log('Client Disconnected')
// })
// })
// server.listen(3000)
// }

module.exports = {
  init: loadSocket
}

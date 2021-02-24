require('module-alias/register')
const express = require('express')
const dotenv = require('dotenv')
const loaders = require('@loaders')
const emitter = require("@config/emitter")
const Http = require('http')
dotenv.config()

async function startServer() {
  // const server = require('http').createServer()
  // const io = require('socket.io')(server, {
  //   cors: {
  //     origin: true,
  //     credentials: true,
  //     methods: ["GET", "POST"]
  //   }
  // })
  // io.on('connection', client => {
  // client.on('event', data => {
  //   console.log(data)
  // })
  // client.on('disconnect', () => {
  //   console.log('Client Disconnected')
  // })
  // })
  // server.listen(3000, err => {
  //   if(err) {
  //     console.log(err)
  //     throw err
  //     return
  //   }
  //   console.log('Socket Server is running')
  // })
  const app = express()
  await loaders.initExpress({ 'app': app });
  // Initialize the socket server
  const server = Http.createServer(app)
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
  emitter.on('broadcast', (data) => {
    // console.log("Inside Broadcast")
    // console.log(data)
    io.emit('temperature', {'temperature':data})
  })
  // let response = await loaders.initSocket({ 'server': server })
  server.listen(process.env.PORT, err => {
    if(err) {
      console.log(err)
      throw err
      return
    }
    console.log('Server is running on port', process.env.PORT)
  })
}

startServer()

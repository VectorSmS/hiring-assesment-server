const EventEmitter = require('events')

class AppEmitter {
  constructor() {
    if(!AppEmitter.instance) {
      console.log('Creating Event Emitter')
      AppEmitter.instance = new EventEmitter()
    }
  }

  getInstance() {
    return AppEmitter.instance
  }
}

module.exports = new AppEmitter().getInstance()

const emitter = require("@config/emitter")

emitter.on('exception', (err) => {
  console.log(err)
})

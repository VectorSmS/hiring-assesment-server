const emitter = require("@config/emitter")

emitter.on('broadcast', (response) => {
  console.log(response.status)
})

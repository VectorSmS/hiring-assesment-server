const emitter = require("@config/emitter")

emitter.on('success', (response) => {
  console.log(response.status)
})

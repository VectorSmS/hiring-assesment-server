const express = require('express')
const router = express.Router()

router.post('/broadcast', require('./broadcastTemp'))

module.exports = router

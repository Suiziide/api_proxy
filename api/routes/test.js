const express = require('express')
const router = express.Router()
const needle = require('needle')

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/', async (req, res) => {
    const apiRes = await needle('get', `${API_BASE_URL}`)
    const data = apiRes.body
})

module.exports = router
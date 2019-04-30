const express = require('express')
const api = express.Router();

const example = require('./example')

api.use('/example', example) // EXAMPLE ROUTES

module.exports = api;
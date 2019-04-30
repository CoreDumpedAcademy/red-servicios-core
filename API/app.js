const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')

// MIDDLEWARE - body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
  })

app.use('/api', api)

module.exports = app;
const express = require('express');
const user = require('./user');
const ins = require('./ins');

const api = express.Router();

api.use('/user', user); // USER ROUTES
api.use('/ins', ins); // INSIGNIAS

module.exports = api;

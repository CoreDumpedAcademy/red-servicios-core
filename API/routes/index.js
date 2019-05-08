const express = require('express');
const user = require('./user');
const ins = require('./ins');
const foro = require('./foro');

const api = express.Router();

api.use('/user', user); // USER ROUTES
api.use('/ins', ins); // INSIGNIAS
api.use('/foro', foro); // FORO

module.exports = api;

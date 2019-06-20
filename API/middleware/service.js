const axios = require('axios');
const User = require('../models/user');

function checkToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send('A token must be present');
  }
  axios.get('https://fridge.coredumped.es/user/', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: req.headers.authorization,
    },
  }).then(() => next()).catch(() => res.status(400).send('Invalid token'));
  return 'ok';
}

function isMod(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send('A token must be present');
  }
  axios.get('https://fridge.coredumped.es/user/', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: req.headers.authorization,
    },
  }).then((data) => {
    console.log(data.data.email);
    User.findOne({ email: data.data.email }, (err, user) => {
      if (err) return res.status(500).send(err);
      if (!user) return res.status(404).send("Couldn't find the user");
      if (user.rol < 1) return res.status(403).send('Your role is not high enough');
      return next();
    });
  }).catch(() => res.status(400).send('A token must be present'));
  return 'ok';
}

function isAdmin(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send('A token must be present');
  }
  axios.get('https://fridge.coredumped.es/user/', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: req.headers.authorization,
    },
  }).then((data) => {
    console.log(data.data.email);
    User.findOne({ email: data.data.email }, (err, user) => {
      if (err) return res.status(500).send(err);
      if (!user) return res.status(404).send("Couldn't find the user");
      if (user.rol < 2) return res.status(403).send('Your role is not high enough');
      return next();
    });
  }).catch(() => res.status(400).send('A token must be present'));
  return 'ok';
}

module.exports = {
  checkToken,
  isMod,
  isAdmin,
};

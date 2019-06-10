const axios = require('axios');

function isLoggedIn(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send('Unauthorized');
  }
  axios.get('https://fridge.coredumped.es/user/', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: req.headers.authorization,
    },
  }).then(() => {
    console.log('Credenciales correctas');
    return next();
  }).catch(() => {
    console.log('Credenciales erroneas');
    return res.status(403).send('Invalid token');
  });
  // return next();
}

module.exports = {
  isLoggedIn,
};

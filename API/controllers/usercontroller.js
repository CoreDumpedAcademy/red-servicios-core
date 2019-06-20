const UserSchema = require('../models/user');

function addUser(req, res) {
  console.log('Adding user'.blue);
  const user = new UserSchema(req.body);
  user.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Datos guardados correctamente');
  });
}

// REQUIERE PERMISOS DE ADMINISTRADOR

function getUsers(req, res) {
  console.log('GET de todos los usuarios'.blue);
  UserSchema.find({}, (err, users) => {
    if (err) return res.status(500).send(err);
    if (!users) return res.status(404).send('No hay usuarios registrados');

    return res.status(200).send({ users });
  });
}

function getUser(req, res) {
  const { email } = req.params;
  console.log(`GET de ${email}`.blue);
  UserSchema.findOne({ $or: [{ email }, { username: email }] }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send('No existe el usuario');

    return res.status(200).send({ user });
  });
}

function editUser(req, res) {
  const { username } = req.params;
  const updated = req.body;
  console.log(`EDITANDO al usuario ${username}`);

  UserSchema.findOneAndUpdate({ username }, updated, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Usuario actualizado correctamente');
  });
}

function emailUsado(req, res) {
  const { email } = req.params;
  UserSchema.findOne({ email }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send('NO EXISTE');
    return res.status(200).send('');
  });
}

function userUsado(req, res) {
  const { username } = req.params;
  UserSchema.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send('NO EXISTE');
    return res.status(200).send('');
  });
}

module.exports = {
  addUser,
  getUsers,
  editUser,
  getUser,
  emailUsado,
  userUsado,
};

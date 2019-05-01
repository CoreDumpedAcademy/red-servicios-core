const UserSchema = require('../models/user');

function addIns(req, res) {
  const { username } = req.params;
  const ins = req.body;
  console.log(`Añadiendo insignia al usuario ${username}`.blue);
  UserSchema.findOneAndUpdate({ username }, { $push: { insignias: ins } },
    (err, updated) => {
      if (err) return res.status(500).send(err);
      if (!updated) return res.status(404).send('El usuario no existe');

      return res.status(200).send('Insignia añadida');
    });
}

function deleteIns(req, res) {
  const { username } = req.params;
  const { pos } = req.params;

  console.log(`Eliminando insignia a ${username}`.yellow);

  UserSchema.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send('Usuario no encontrado');
    user.insignias.splice(pos, 1);
    UserSchema.update({ username }, user, (error) => {
      if (error) return res.status(500).send(err);
      return res.status(200).send('Insignia eliminada correctamente');
    });

    return 'ok';
  });
}

function getIns(req, res) {
  const { username } = req.params;

  console.log(`GET de todas las insignias de ${username}`.blue);
  UserSchema.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send('No existe el usuario');

    return res.status(200).send({ insignias: user.insignias });
  });
}

module.exports = {
  addIns,
  deleteIns,
  getIns,
};

const Foro = require('../models/foro');

function getForos(req, res) {
  console.log('GET DE TODOS LOS FOROS'.blue);
  Foro.find({}, (err, foros) => {
    if (err) return res.status(500).send(err);
    if (!foros) return res.status(404).send('No hay foros guardados');

    return res.status(200).send(foros);
  });
}

function getForo(req, res) {
  const { pos } = req.params;
  const { title } = req.params;
  console.log(`GET DEL FORO ${pos}`.blue);
  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('Foro no encontrado');

    return res.status(200).send(foro);
  });
}

function addForo(req, res) {
  const foro = new Foro(req.body);
  console.log(`AÑADIENDO FORO ${foro.title}`.blue);
  foro.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Foro añadido correctamente');
  });
}

function editForo(req, res) {
  const { title } = req.params;
  const foro = req.body;
  Foro.findOneAndUpdate({ title }, foro, (err, succ) => {
    if (err) return res.status(500).send(err);
    if (!succ) return res.status(404).send('Foro no encontrado');

    return res.status(200).send('Foro editado correctamente');
  });
}

function deleteForo(req, res) {
  const { title } = req.params;
  Foro.findOneAndDelete({ title }, (err, succ) => {
    if (err) return res.status(500).send(err);
    if (!succ) return res.status(404).send('Foro no encontrado');

    return res.status(200).send('Foro eliminado correctamente');
  });
}

module.exports = {
  getForos,
  getForo,
  addForo,
  editForo,
  deleteForo,
};

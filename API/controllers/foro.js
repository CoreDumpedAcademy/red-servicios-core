/* eslint-disable no-param-reassign */
const Foro = require('../models/foro');

function getForos(req, res) {
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

// QUESTIONS

function getQuestions(req, res) {
  const { title } = req.params;
  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('No existe ese foro');
    return res.status(200).send(foro.preguntas);
  });
}

function getQuestion(req, res) {
  const { title } = req.params;
  const { pos } = req.body;
  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('No existe ese foro');
    if (!foro.preguntas[pos]) return res.status(404).send('No existe la pregunta');
    return res.status(200).send(foro.preguntas[pos]);
  });
}

function addQuestion(req, res) {
  const { title } = req.params;
  const pregunta = req.body;
  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('No existe el foro');
    if (!pregunta) return res.status(403).send('Debes colocar una pregunta');
    foro.preguntas.push(pregunta);
    Foro.update({ title }, foro, (error) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send('Pregunta guardada correctamente');
    });
    return 'ok';
  });
}

function editQuestion(req, res) {
  const { title } = req.params;
  const { pos } = req.body;
  const { question } = req.body;
  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('No existe el foro');
    if (pos === undefined) return res.status(400).send('Expected pos argument');
    if (typeof (pos) !== 'number') return res.status(400).send('pos expected to be a number');
    if (pos > foro.preguntas.length) return res.status(400).send('No existe pregunta en esa posicion');
    if (!question) return res.status(400).send('Expected question argument');

    foro.preguntas[pos] = question;
    Foro.update({ title }, foro, (error) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send('Pregunta editada correctamente');
    });
    return 'OK';
  });
}

function solveQuestion(req, res) {
  const { title } = req.params;
  const { pos } = req.body;
  const { solved } = req.body;

  Foro.findOne({ title }, (err, foro) => {
    if (err) return res.status(500).send(err);
    if (!foro) return res.status(404).send('No existe el foro');
    if (typeof (pos) !== 'number') return res.status(400).send('pos argument must be a number');
    if (pos === undefined) return res.status(400).send('Expected pos argument');
    if (pos > foro.preguntas.length) return res.status(400).send('No existe pregunta en esa posicion');
    if (solved === undefined) return res.status(400).send('Expected status argument');

    foro.preguntas[pos].solved = solved;

    Foro.update({ title }, foro, (error) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send('Estado cambiado correctamente');
    });
    return 'OK';
  });
}

module.exports = {
  getForos,
  getForo,
  addForo,
  editForo,
  deleteForo,
  getQuestions,
  getQuestion,
  addQuestion,
  editQuestion,
  solveQuestion,
};

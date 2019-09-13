const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = Schema({
  username: { type: String, required: true },
  picture: String,
});

const respuesta = Schema({
  user,
  text: { type: String, required: true },
  published: { type: Date, default: () => new Date(Date.now()) },
});

const pregunta = Schema({
  user,
  title: String,
  text: String,
  published: { type: Date, default: () => new Date(Date.now()) },
  solved: { type: Boolean, default: false },
  respuestas: [respuesta],
  datewhenSolved: Date,
});

const foro = Schema({
  title: { type: String, unique: true, required: true },
  description: String,
  members: [String],
  preguntas: [pregunta],
  created: { type: Date, default: () => new Date(Date.now()) },
  admins: [String], // Se guardan los emails de los admins
});

module.exports = mongoose.model('foro', foro);

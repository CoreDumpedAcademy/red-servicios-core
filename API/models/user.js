const mongoose = require('mongoose');

const { Schema } = mongoose;

const Insignia = Schema({
  nombre: { type: String },
  imagen: { type: String },
  gif: { type: String },
  descripcion: { type: String },
  conseguida: { type: Date, default: () => new Date(Date.now()) },
});

const UserSchema = Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, required: true },
  insignias: [{ type: Insignia }],
  cuentas: {
    telegram: { type: String, default: '' },
    biblioteca: { type: String, default: '' },
    slack: { type: String, default: '' },
  },
  rol: { type: Number, default: 0 },
  picture: String,
  bio: String,
});

module.exports = mongoose.model('UserSchema', UserSchema);

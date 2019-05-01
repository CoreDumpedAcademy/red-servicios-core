const mongoose = require('mongoose');

const { Schema } = mongoose;

const Insignia = Schema({
  nombre: { type: String },
  descripcion: { type: String },
  id: { type: String, unique: true, required: true },
});

const UserSchema = Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, required: true },
  insignias: [{ type: Insignia, unique: true }],
  cuentas: {
    telegram: { type: String, default: '' },
    biblioteca: { type: String, default: '' },
    slack: { type: String, default: '' },
  },
  rol: { type: Number, default: 0 },
});

module.exports = mongoose.model('UserSchema', UserSchema);

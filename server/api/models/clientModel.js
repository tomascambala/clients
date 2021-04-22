const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    providers: Number
  }
);

module.exports = mongoose.model('Client', ClientSchema);

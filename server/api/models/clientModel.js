const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required'
      
    }, 
    email: {
      type: String,
      required: 'Email is required'
    },
    phone: {
      type: String
    },
    providers: {
      type: String
    }
  }
);

module.exports = mongoose.model('Client', ClientSchema);

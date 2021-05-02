const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const clientSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is invalid: ${value}`)
      }
    }
  },

  password: {

  },

  joinedAt: {
    type: Date,
    default: Date.now,
  },

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },
})

clientSchema.pre(`save`, async function (next) {
  const client = this;
  if (client.isModified('password')) {
    client.password = await bcrypt.hash(client.password, 8);
  }
  next();
})

const Client = mongoose.model('clients-collection', clientSchema)


module.exports = Client;
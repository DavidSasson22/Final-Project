const mongoose = require('mongoose');
const validator = require('validator');


const clientSchme = mongoose.model('clients-collection', {
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
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(validator.isEmail(!value)) {
        throw new Error (`Email is invalid`)
      }
    }
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


module.exports = clientSchme;
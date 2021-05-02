const mongoose = require('mongoose');
// const validator = require('validator')


const clientSchme = mongoose.model('clients-collection', {
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },

  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },
})


module.exports = clientSchme;
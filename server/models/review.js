const mongoose = require('mongoose');
const validator = require('validator');


const clientSchme = mongoose.model('review-collection', {
  owner: {
    
  },

  buisness: {
    
  },

  totalRank: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },

  Cleanliness: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },

  toiletPaper: {
    type: Boolean,
    required: false,
  },

  kindness: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})


module.exports = clientSchme;
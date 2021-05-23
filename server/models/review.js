const mongoose = require('mongoose');
// const validator = require('validator');

const reviewSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  },

  object: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Businesses'
  },

  date: {
    type: Date,
    default: Date.now,
  },

  rank: {
    totalRank: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    cleanliness: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    toiletPaper: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },

    kindness: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
})

const Review = mongoose.model('Reviews', reviewSchema)


module.exports = Review;
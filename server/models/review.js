const mongoose = require('mongoose');
const validator = require('validator');

const reviewSchema = mongoose.Schema({
  owner: {

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
  },
})

const Review = mongoose.model('review-collection', reviewSchema)


module.exports = Review;
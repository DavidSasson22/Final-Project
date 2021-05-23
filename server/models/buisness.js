const mongoose = require('mongoose');


const businessSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  },

  name: {
    type: String,
    required: true,
  },

  condition: {
    type: String,
    required: true,
  },

  adress: {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    coordinates: {
      longitude: {
        type: String,
        required: true,
      },
      latitude: {
        type: String,
        required: true,
      },
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },

  reviews: {
    numberOfReviewers: {
      type: Number,
      default: 0,
    },

    rank: {
      totalRank: {
        type: Number,
        required: false,
        min: 0,
        max: 5,
        default: null,
      },

      cleanliness: {
        type: Number,
        required: false,
        min: 0,
        max: 5,
        default: null,
      },

      toiletPaper: {
        type: Number,
        required: false,
        default: 0,
      },

      kindness: {
        type: Number,
        required: false,
        min: 0,
        max: 5,
        default: null,
      },
    },
  },
});


businessSchema.virtual('review', {
  ref: 'Reviews',
  localField: '_id',
  foreignField: 'object'
})

const Business = mongoose.model('Businesses', businessSchema)


module.exports = Business;
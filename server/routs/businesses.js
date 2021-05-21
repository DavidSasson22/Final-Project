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
  },
});


businessSchema.virtual('Review', {
  ref: 'Reviews',
  localField: '_id',
  foreignField: 'object'
})

const Business = mongoose.model('Businesses', businessSchema)


module.exports = Business;
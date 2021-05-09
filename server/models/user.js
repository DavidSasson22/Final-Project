const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
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

  userType: {
    //0 = Admin, 1 = Provider, 2 = Client
    type: Number,
    min: 0,
    max: 2,
  }
})


userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(`Unable to login`);
  };
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error(`Unable to login`)
  };
  return user
};


//Hash password before saving
userSchema.pre(`save`, async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
})

const User = mongoose.model('users-collection', userSchema)


module.exports = User;
const User = require('../models/user');

//Get all user's info, find by _id
const getUser = async (req, res) => {
  console.log(`getUser activated`);
  console.log(req.params);
  const _id = req.params.id
  try {
    const user = await User.findById(_id);
    user ? res.status(200).send(user) : res.status(404).send();
  }
  catch (e) {
    res.status(500).send()
  }
}

//Update user's info
const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstName', 'lastName', 'isActive', 'email', `password`];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  };
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    user ? res.status(200).send(user) : res.status(404).send();
  }
  catch (e) {
    res.status(400).send(e)
  };
};

//Create new user
const createNewUser = async (req, res) => {
  const { firstName, lastName, email, password, joinedAt, isActive, userType } = req.body;
  const user = new User({ firstName, lastName, email, password, joinedAt, isActive, userType });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  }
  catch (e) {
    res.status(400).send(e);
  }
};

//Login
const userLog = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  }
  catch (e) {
    res.status(400).send();
  };
};


module.exports = {
  getUser,
  updateUser,
  createNewUser,
  userLog,
}
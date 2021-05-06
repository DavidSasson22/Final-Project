const User = require('../models/user');


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


const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstName', 'lastName', 'isActive', 'email', `password`];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    user ? res.status(200).send(user) : res.status(404).send();
  } 
  catch (e) {
    res.status(400).send(e)
  }
}


module.exports = {
  getUser,
  updateUser,
}
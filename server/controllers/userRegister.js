const User = require('../models/user');


const createNewUser = async (req, res) => {
  const { firstName, lastName, email, password, joinedAt, isActive } = req.body;
  const user = new User({ firstName, lastName, email, password, joinedAt, isActive });
  try {
    await user.save();
    res.status(201).send(user);
  }
  catch (e) {
    // console.log(user);
    res.status(400).send(e);
  }
}


module.exports = {
  createNewUser, 
}
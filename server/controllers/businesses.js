const Buisness = require('../models/buisness');


const addBuisness = async (req, res) => {
  const buisness = new Buisness({
    ...req.body,
    owner: req.user._id
  })

  try {
    await buisness.save();
    res.status(201).send(buisness);

  } catch (e) {
    res.status(400).send(e)
  }
}


module.exports = {
  addBuisness,
}
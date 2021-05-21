const Buisness = require('../models/buisness');

//Add buisness ==working==
const addBuisness = async (req, res) => {
  const buisness = new Buisness({
    ...req.body,
    owner: req.user._id
  });
  try {
    await buisness.save();
    res.status(201).send(buisness);
  } catch (e) {
    res.status(400).send(e)
  };
};

//Get user's buisnesses list
const getMyBuisnesses = async (req, res) => {
  try {
    await req.user.populate('business').execPopulate();
    res.send(req.user.business);
  } catch (e) {
    res.status(500).send();
  };
};

//Get user's specific business ==Working==
const getSingleBuisness = async (req, res) => {
  const _id = req.params.id
  try {
    const buisness = await Buisness.findOne({ _id });
    if (!buisness) {
      return res.status(404).send()
    };
    res.send(buisness)
  } catch (e) {
    res.status(500).send()
  };
};

//Get business reviews
const getBusinessReviews = async (req, res) => {
  const _id = req.params.id
  try {
    const buisness = await Buisness.findOne({ _id });
    if (!buisness) {
      return res.status(404).send()
    };
    // res.send(buisness)
    await buisness.populate('review').execPopulate();
    res.send(buisness.review);
  } catch (e) {
    res.status(500).send()
  };
};

//Update user's business
const updateBuisness = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'condition', 'adress']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  };
  try {
    const buisness = await Buisness.findOne({ _id: req.params.id, owner: req.user._id });
    if (!buisness) {
      return res.status(404).send();
    };
    updates.forEach((update) => buisness[update] = req.body[update]);
    await buisness.save();
    res.send(buisness);
  } catch (e) {
    res.status(400).send(e);
  };
};

//Delete user's business
const deleteBuisness = async (req, res) => {
  try {
    const buisness = await Buisness.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!buisness) {
      res.status(404).send();
    };
    res.send(buisness);
  } catch (e) {
    res.status(500).send();
  };
};



module.exports = {
  addBuisness,
  getMyBuisnesses,
  getSingleBuisness,
  updateBuisness,
  deleteBuisness,
  getBusinessReviews,
}
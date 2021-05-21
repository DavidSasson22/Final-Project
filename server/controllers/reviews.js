const Review = require('../models/review');


/*
                      =======================
                      Loged user's preveliges
                      =======================
*/


//Post review
const postReview = async (req, res) => {
  const review = new Review({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await review.save()
    res.status(201).send(review)
  } catch (e) {
    res.status(400).send(e)
  };
};

//Get user's reviews list
const getReviews = async (req, res) => {
  try {
    await req.user.populate('review').execPopulate();
    res.send(req.user.review);
  } catch (e) {
    res.status(500).send()
  };
};

//Get user's specific review
const getSingleReview = async (req, res) => {
  const _id = req.params.id
  try {
    const review = await Review.findOne({ _id, owner: req.user._id });
    if (!review) {
      return res.status(404).send()
    };
    res.send(review)
  } catch (e) {
    res.status(500).send()
  };
};

//Update user's review
const updateReview = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['rank']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  };
  try {
    const review = await Review.findOne({ _id: req.params.id, owner: req.user._id });
    if (!review) {
      return res.status(404).send();
    };
    updates.forEach((update) => review[update] = req.body[update]);
    await review.save();
    res.send(review);
  } catch (e) {
    res.status(400).send(e);
  };
};

//Delete user's review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!review) {
      res.status(404).send();
    };
    res.send(review);
  } catch (e) {
    res.status(500).send();
  };
};


module.exports = {
  postReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
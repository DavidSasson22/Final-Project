const Review = require('../models/review');


const postReview = async (req, res) => {
  const review = new Review({
    ...req.body,
    owner: req.user._id
  })

  try {
    await review.save()
    res.status(201).send(review)
  } catch (e) {
    res.status(400).send(e)
  }
}


module.exports = {
  postReview,
}
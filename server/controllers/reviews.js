const Review = require('../models/review');
const Buisness = require('../models/buisness');


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
    const buisness = await Buisness.findOne(review.object);
    if (!buisness) {
      return res.status(404).send()
    };
    let buisnessRank = buisness.reviews.rank.totalRank;
    let buisnessClean = buisness.reviews.rank.cleanliness;
    let buisnessPaper = buisness.reviews.rank.toiletPaper;
    let buisnessKindness = buisness.reviews.rank.kindness;

    let revRanked = review.rank.totalRank;
    let revClean = review.rank.cleanliness;
    let revPaper = review.rank.toiletPaper;
    let revKindness = review.rank.kindness;

    let numberOfRanks = buisness.reviews.numberOfReviewers;

    if (buisnessRank) {
      buisness.reviews.rank.totalRank =
        (buisnessRank * numberOfRanks + revRanked) / (numberOfRanks + 1).toFixed(2);
      buisness.reviews.rank.cleanliness =
        (buisnessClean * numberOfRanks + revClean) / (numberOfRanks + 1).toFixed(2);
      buisness.reviews.rank.toiletPaper =
        (buisnessPaper * numberOfRanks + revPaper) / (numberOfRanks + 1).toFixed(2);
      buisness.reviews.rank.kindness =
        (buisnessKindness * numberOfRanks + revKindness) / (numberOfRanks + 1).toFixed(2);
    }
    else {
      buisness.reviews.rank.totalRank = revRanked;
      buisness.reviews.rank.cleanliness = revClean;
      buisness.reviews.rank.toiletPaper = revPaper;
      buisness.reviews.rank.kindness = revKindness;
    };
    buisness.reviews.numberOfReviewers += 1;

    await buisness.save();
  } catch (e) {
    return res.status(500).send(e)
  };
  try {
    await review.save();
    res.status(201).send(review);
  } catch (e) {
    res.status(400).send(e)
  };
};

//Get user's reviews list
const getReviews = async (req, res) => {
  try {
    await req.user.populate({
      path: 'review',
      options: {
        sort: {
          date: 1
        },
      }
    }).execPopulate();
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


//Delete user's review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!review) {
      res.status(404).send();
    };
    try {
      const buisness = await Buisness.findOne(review.object);
      if (!buisness) {
        return res.status(404).send()
      };
      let buisnessRank = buisness.reviews.rank.totalRank;
      let buisnessClean = buisness.reviews.rank.cleanliness;
      let buisnessPaper = buisness.reviews.rank.toiletPaper;
      let buisnessKindness = buisness.reviews.rank.kindness;

      let revRanked = review.rank.totalRank;
      let revClean = review.rank.cleanliness;
      let revPaper = review.rank.toiletPaper;
      let revKindness = review.rank.kindness;

      let numberOfRanks = buisness.reviews.numberOfReviewers;

      if (numberOfRanks > 1) {
        buisness.reviews.rank.totalRank =
          (buisnessRank * numberOfRanks - revRanked) / (numberOfRanks - 1).toFixed(2);
        buisness.reviews.rank.cleanliness =
          (buisnessClean * numberOfRanks - revClean) / (numberOfRanks - 1).toFixed(2);
        buisness.reviews.rank.toiletPaper =
          (buisnessPaper * numberOfRanks - revPaper) / (numberOfRanks - 1).toFixed(2);
        buisness.reviews.rank.kindness =
          (buisnessKindness * numberOfRanks - revKindness) / (numberOfRanks - 1).toFixed(2);
      }
      else {
        buisness.reviews.rank.totalRank = null;
        buisness.reviews.rank.cleanliness = null;
        buisness.reviews.rank.toiletPaper = null;
        buisness.reviews.rank.kindness = null;
      };
      buisness.reviews.numberOfReviewers -= 1;

      await buisness.save();
    } catch (e) {
      return res.status(500).send(e)
    };
    res.send(review);
  } catch (e) {
    res.status(500).send();
  };
};


//Update user's review
const updateReview = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['rank'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  let reviewBeforeUpdate = {
    rank: {
      totalRank: null,
      cleanliness: null,
      toiletPaper: null,
      kindness: null
    },
  };

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  };
  try {
    const review = await Review.findOne({ _id: req.params.id, owner: req.user._id });
    if (!review) {
      return res.status(404).send();
    };

    reviewBeforeUpdate.rank.totalRank = review.rank.totalRank;
    reviewBeforeUpdate.rank.cleanliness = review.rank.cleanliness;
    reviewBeforeUpdate.rank.toiletPaper = review.rank.toiletPaper;
    reviewBeforeUpdate.rank.kindness = review.rank.kindness;

    updates.forEach((update) => review[update] = req.body[update]);
    await review.save();

    const review2 = await Review.findOne({ _id: req.params.id, owner: req.user._id });
    const buisness = await Buisness.findOne(review2.object);

    let buisnessRank = buisness.reviews.rank.totalRank;
    let buisnessClean = buisness.reviews.rank.cleanliness;
    let buisnessPaper = buisness.reviews.rank.toiletPaper;
    let buisnessKindness = buisness.reviews.rank.kindness;

    let revRanked = review2.rank.totalRank;
    let revClean = review2.rank.cleanliness;
    let revPaper = review2.rank.toiletPaper;
    let revKindness = review2.rank.kindness;

    let revRankedGap = revRanked - reviewBeforeUpdate.rank.totalRank;
    let revCleanGap = revClean - reviewBeforeUpdate.rank.cleanliness;
    let revPaperGap = revPaper - reviewBeforeUpdate.rank.toiletPaper;
    let revKindnessGap = revKindness - reviewBeforeUpdate.rank.kindness;

    let numberOfRanks = buisness.reviews.numberOfReviewers;

    buisness.reviews.rank.totalRank =
      (buisnessRank * numberOfRanks + revRankedGap) / (numberOfRanks).toFixed(2);
    buisness.reviews.rank.cleanliness =
      (buisnessClean * numberOfRanks + revCleanGap) / (numberOfRanks).toFixed(2);
    buisness.reviews.rank.toiletPaper =
      (buisnessPaper * numberOfRanks + revPaperGap) / (numberOfRanks).toFixed(2);
    buisness.reviews.rank.kindness =
      (buisnessKindness * numberOfRanks + revKindnessGap) / (numberOfRanks).toFixed(2);

    await buisness.save();
    res.status(200).send(review2);
  } catch (e) {
    res.status(400).send(e);
  }
}


module.exports = {
  postReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
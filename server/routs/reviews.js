const express = require('express');
const router = new express.Router();
const reviews = require('../controllers/reviews');
const auth = require('../middleWare/auth');

//Post review
router.post('/', auth, (req, res) => reviews.postReview(req, res));
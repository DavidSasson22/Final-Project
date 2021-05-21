const express = require('express');
const router = new express.Router();
const businessess = require('../controllers/businesses');
const auth = require('../middleWare/auth');


//Add business
router.post('/', auth, (req, res) => businessess.addBuisness(req, res));

module.exports = router;
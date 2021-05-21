const express = require('express');
const router = new express.Router();
const businessess = require('../controllers/businesses');
const auth = require('../middleWare/auth');


/*
                      =======================
                      Loged user's preveliges
                      =======================
*/


//Add business
router.post('/', auth, (req, res) => businessess.addBuisness(req, res));

//Get all user's businesses
router.get('/', auth, (req, res) => businessess.getMyBuisnesses(req, res));

//Get user's specific business
router.get('/:id', auth, (req, res) => businessess.getSingleBuisness(req, res));

//Update user's specific business
router.patch('/:id', auth, (req, res) => businessess.updateBuisness(req, res));

//Delete user's specific business
router.delete('/:id', auth, (req, res) => businessess.deleteBuisness(req, res));


module.exports = router;
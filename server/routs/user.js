const express = require('express');
const router = express.Router();
const user = require('../controllers/user');


router.get('/:id',(req,res) => user.getUser(req,res));
router.patch('/:id', (req, res) => user.updateUser(req, res));

module.exports = router;
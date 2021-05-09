const express = require('express');
const router = express.Router();
const users = require('../controllers/user');


router.get('/:id',(req,res) => users.getUser(req,res));
router.patch('/:id', (req, res) => users.updateUser(req, res));

router.post('/login',(req,res) => users.userLog(req,res));
router.post('/register',(req,res) => users.createNewUser(req,res));


module.exports = router;
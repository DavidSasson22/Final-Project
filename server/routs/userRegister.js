const express = require('express');
const router = express.Router();
const users = require('../controllers/userRegister');


router.post('/',(req,res) => users.createNewUser(req,res));


module.exports = router;
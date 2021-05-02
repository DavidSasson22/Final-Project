const express = require('express');
const router = express.Router();
const users = require('../controllers/register');


router.post('/',(req,res) => users.createNewClient(req,res));


module.exports = router;
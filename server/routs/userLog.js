const express = require('express');
const router = express.Router();


router.post('/',(req,res) => users.createNewClient(req,res));


module.exports = router;
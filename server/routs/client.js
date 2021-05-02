const express = require('express');
const router = express.Router();
const client = require('../controllers/client');


router.get('/:id',(req,res) => client.getClient(req,res));
router.patch('/:id', (req, res) => client.updateClient(req, res));

module.exports = router;
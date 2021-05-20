const express = require('express');
const router = express.Router();
const users = require('../controllers/user');
const authes = require('../middleWare/auth');


router.get('/:id', authes.clientAuth, (req, res) => users.getUser(req, res));
router.patch('/:id', (req, res) => users.updateUser(req, res));

router.get('/me', authes.clientAuth, async (req, res) => {
  console.log(`activated`);
  res.send(req.user);
  console.log(req.user);
});

router.post('/login', (req, res) => users.userLog(req, res));
router.post('/register', (req, res) => users.createNewUser(req, res));


module.exports = router;
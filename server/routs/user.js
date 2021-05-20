const express = require('express');
const router = new express.Router();
const users = require('../controllers/user');
const auth = require('../middleWare/auth');


//Register new user ==Working==
router.post('/', (req, res) => users.registerUser(req, res));

//Login user ==Working==
router.post('/login', (req, res) => users.logUser(req, res));

//Log out user
router.post('/logout', auth, (req, res) => users.logOut(req, res));




module.exports = router;



// router.get('/:id', auth, (req, res) => users.getUser(req, res));
// router.patch('/:id', (req, res) => users.updateUser(req, res));

// router.get('/me', auth, async (req, res) => {
//   console.log(`activated`);
//   res.send(req.user);
//   console.log(req.user);
// });

// router.post('/login', (req, res) => users.userLog(req, res));
// router.post('/register', (req, res) => users.createNewUser(req, res));
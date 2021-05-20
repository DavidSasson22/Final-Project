const express = require('express');
const router = new express.Router();
const users = require('../controllers/user');
const auth = require('../middleWare/auth');


//Register new user ==Working==
router.post('/', (req, res) => users.registerUser(req, res));

//Login user ==Working==
router.post('/login', (req, res) => users.logUser(req, res));

//Log out user ==Working==
router.post('/logout', auth, (req, res) => users.logOut(req, res));

//Log out user from all devices ==Working==
router.post('/logoutAll', auth, (req, res) => users.logOutAll(req, res));

//Get my info while loged in ==Working==
router.get('/me', auth, async (req, res) => res.send(req.user));

//Edit user's info ==Working==
router.patch('/me', auth, (req, res) => users.updateUser(req, res));

//Delete user  while loged in
router.delete('/me', auth, (req, res) => users.deleteUser(req, res));

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
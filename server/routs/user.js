const express = require('express');
const router = new express.Router();
const users = require('../controllers/user');
const auth = require('../middleWare/auth');


/*
                         =================
                         User's preveliges
                         =================
*/

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

//Delete user  while loged in ==Working==
router.delete('/me', auth, (req, res) => users.deleteUser(req, res));

module.exports = router;


/*
                         ==================
                         Admin's preveliges
                         ==================
*/
// router.get('/:id', auth, (req, res) => users.getUser(req, res));
// router.patch('/:id', (req, res) => users.updateUser(req, res));


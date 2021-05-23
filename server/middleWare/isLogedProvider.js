require('dotenv').config();
const jwt = require(`jsonwebtoken`);
const User = require('../models/user');
const tokenJwt = process.env.tokenJwt;


const isLogedProvider = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, tokenJwt);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    };

    if (user.userType !== 1) {
      throw new Error(`You are not register as a buisness owner`);
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e.message);
    if (e .message == `invalid signature`) {
      res.status(401).send({ error: 'Please authenticate.' });
    }
    else {
    } 
    res.status(401).send(`${e}`);
  };
};

module.exports = isLogedProvider
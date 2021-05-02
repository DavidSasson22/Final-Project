const Client = require('../models/client');


const createNewClient = async (req, res) => {
  const { firstName, lastName, user_id, isActive } = req.body;
  const client = new Client({ firstName, lastName, user_id, isActive });
  try {
    await client.save();
    res.status(201).send(client);
  }
  catch (e) {
    res.status(400).send(e);
  }
}


module.exports = {
  createNewClient, 
}
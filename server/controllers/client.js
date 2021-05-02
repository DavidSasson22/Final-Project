const Client = require('../models/client');


const getClient = async (req, res) => {
  console.log(`getClient activated`);
  console.log(req.params);
  const _id = req.params.id
  try {
    const client = await Client.findById(_id);
    client ? res.status(200).send(client) : res.status(404).send();
  }
  catch (e) {
    res.status(500).send()
  }
}


const updateClient = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstName', 'lastName', 'isActive', 'email', `password`];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    client ? res.status(200).send(client) : res.status(404).send();
  } 
  catch (e) {
    res.status(400).send(e)
  }
}


module.exports = {
  getClient,
  updateClient,
}
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./server/dataBase/mongoose');
// const jwt = require(`jsonwebtoken`);

const userRouter = require('./server/routs/user');
const reviewRouter = require('./server/routs/reviews');
const buisnessRouter = require('./server/routs/businesses');


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/businessess', buisnessRouter);


// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

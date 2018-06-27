const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI;

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log('MongoDb Connected..'))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth', { useMongoClient: true });

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

require('./controllers')(app);

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});

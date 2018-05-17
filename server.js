const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const secret = 'Who but me? Loves JWT';
const port = process.env.PORT || 5000;
const User = require('./users/User');

const server = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

server.use(express.json());
server.use(cors(corsOptions));

// ######################## HELPER FUNCTIONS ########################

const getTokenForUser = userObject => {
  // creating a JWT and returning it.
  // this function is more of a simple helper function than middleware,
  // notice `req, res and next` are missing, this is because the auth is simple here.
  // no need for custom middleware, just a helper function. :)
  return jwt.sign(userObject, secret, { expiresIn: '1h' });
};

const validateToken = (req, res, next) => {
  // this piece of middleware is taking the token delivered up to the server and verifying it
  // if no token is found in the header, you'll get a 422 status code
  // if token is not valid, you'll receive a 401 status code
  const token = req.headers.authorization;
  if (!token) {
    res
      .status(422)
      .json({ error: 'No authorization token found on Authorization header' });
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({ error: 'Token invalid, please login', message: err });
      } else {
        // token is valid, so continue on to the next middleware/request handler function
        next();
      }
    });
  }
};

// ######################## ROUTE HANDLERS ########################

server.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  user.save((err, user) => {
    if (err) return res.send(err);

    const token = getTokenForUser({ username: user.username });
    res.json({ token });
  });
});

server.get('/api/users', validateToken, (req, res) => {
  User.find({})
    .select('username')
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      return res.send(err);
    });
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Invalid Username/Password' });
    }

    if (!user) {
      return res
        .status(422)
        .json({ error: 'No user with that username in our DB' });
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        return res.status(422).json({ error: 'passwords dont match' });
      }

      if (isMatch) {
        const token = getTokenForUser({ username: user.username });
        res.json({ token });
      } else {
        return res.status(422).json({ error: 'passwords dont match' });
      }
    });
  });
});

// ######################## CONNECT TO DB AND START THE API ########################

mongoose
  .connect('mongodb://localhost/auth')
  .then(() => {
    console.log('\n=== Connected to MongoDB ===');
    server.listen(port, (req, res) => {
      console.log(`\n=== API up on port ${port} ===\n`);
    });
  })
  .catch(err =>
    console.log('\n=== Error connecting to MongoDb, is it running? ===\n', err)
  );

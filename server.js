const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const routes = require('./routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth');
const jwt = require('jwt');

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true
};

const server = express();
server.use(bodyParser.json());
server.use(cors(corsOptions));

routes(server);

server.post('/api/users', passwordEncrypt, (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  const newUser = new User({ username, password});
  User.save((err, savedUser) => {
    if (err) res.status(422).json(err);
    res.json({ success: { savedUser: savedUser.username } });
  });
});
    
server.post ('/api/login', (req, res) => {
  const { username, password } = req.body; 
  // use req.session.. 
  // if in db, send info back to client, 
  // else sendUserError
});function TokenGenerator (secretOrPrivateKey, secretOrPublicKey, options) {
  this.secretOrPrivateKey = secretOrPrivateKey;
  this.secretOrPublicKey = secretOrPublicKey;
  this.options = options; //algorithm + keyid + noTimestamp + expiresIn + notBefore
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}


server.get ('/api/users', (req, res) => {
  if (!req.session.username) {
    sendUserError('User not logged in', res);
  }
  TokenGenerator.prototype.sign = function(payload, signOptions) {
    const jwtSignOptions = Object.assign({}, signOptions, this.options);
    return jwt.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
  }

headers: {
 Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}
});


server.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});

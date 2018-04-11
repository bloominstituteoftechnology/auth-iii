
### Client Authentication using JWTs

* The goal of this exercise is to have you refactor your client to work with a JWT server, not implement the JWT server itself (unless you really want to). Have a look around the code and try to understand as much of what it is doing as you can.

To get started be sure to follow the regular steps:

* `yarn` to install all the dependencies from the package.json file.
* `mongod` to start your mongo instance.
* `yarn start` to run nodemon over the server file.

The three endpoints that are included are:

Take a tour of this repository. Get familiar with the chosen file structure. _Notice_ we have a few directories here. `controllers` `models` `routes` and `services`. You can think of each of those this way.

* `controllers` - the code that interfaces between our routes and

## `[POST] /api/users`

* Takes a `username` and `password` in the request body and creates a user to save to the DB.

## `[POST] /api/login`

* Requires `username` and `password` to be sent up to the request body. If the user exists, and the password is correct the result should be a shiny JWT.

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}
```

* This will be the token you need to send up to `[GET] /api/users`

## `[GET] /api/users`

* Requires a valid JWT token to be sent in the `Authorization` header. An example could look like this:

```
headers: {
 Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}
```

* _Notice_ you'll be sending this up to the server on the header. Eventually we could write a mechanism into our server to accept this via header, query string or req.body.
* If your token is valid, you'll get a list of the sent back that are in the system.

## Stretch Problem
Build the entire client from scratch and duplicate this functionality. This is a great exercise to solidify your React/Redux chops!

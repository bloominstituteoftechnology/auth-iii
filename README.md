# Client Authentication using JWTs

The goal of this exercise is to build a client to work with a JWT server, not implement the JWT server itself (unless you really want to). We have provided a very simple implementation of a JWT server.

## Download and Start the Server

To get started be sure to follow the regular steps:

* fork and clone this repository.
* **cd inside the folder**.
* `yarn` or `npm install` to download all the dependencies listed in `package.json`.
* `mongod` to start your MongoDB server.
* `yarn start` to start the API server.

## Endpoints

The server provides the following endpoints:

## `[POST] /api/users`

* Takes a `username` and `password` in the request body, creates a user, saves the user to the DB and returns a JWT token.

## `[POST] /api/login`

* Requires `username` and `password` to be sent in the request body. If the user exists, and the password is correct the result should be a shiny JWT.

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}
```

* This will be the token you need to send up to `[GET] /api/users`

## `[GET] /api/users`

* Requires a valid JWT token to be sent in the `Authorization` header. **No need to add the word** `Bearer`, just the token.
* An example could look like this:

```
headers: {
 Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ5YW5Acnlhbi5jb20iLCJpYXQiOjE1MTYyOTQ1NzMsImV4cCI6MTUxNjI5ODE3M30.Uv4Sr-wNIRQx_P977NG6HGCktuDHsAdu3o_sjqRP71k"
}
```

* If your token is valid, you'll get a list of the users stored in the database.

## Assignment

Build a React client to connect to the provided server.

* add client side routes and components for `signup`, `sigin` and showing a list of `users` stored in the database.
* the `/signup` route should provide a form to gather username and password for the user and make a POST request to the `/api/register` route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the `/users` route.
* the `/signin` route should provide a form to gather username and password for the user and make a POST request to the `/api/login` route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the `/users` route.
* the `/users` route should read the token from local storage and make a GET request to the `/api/users` route on the API attaching the token as the value of the `Authorization` header.
* provide a button to `sign out` that will remove the token from local storage.
* add any extra functionality to make the application more user friendly like showing a message and redirecting to `/signin` if an unauthenticated user tries to access the list of users.

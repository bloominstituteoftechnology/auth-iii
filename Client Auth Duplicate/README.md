# Client-Auth

## Setup

* Start your MongoDB server by running `mongod` or `mongod --dbpath data` from the command line.
* Start up your Auth server which we extended in the mini lab.

## Todos

### Client Authentication using Server-side Sessions

* Complete the SignUp component. When the user fills out the form you should send an axios POST request to the server to save the user to the database.
* From there, the user will be redirected to the `/signin` page to login.
* Upon successful login, the server will be persisting their session, and the user should be able to get a list of all the users currently stored in the database (you'll want to test this by registering a bunch of users).
* You'll also need to complete the `RequireAuth` higher-order component in `/components/HOC`.
* This higher-order component wraps the `users` component to ensure that only authorized users can view that component.

There's lots of starter code in this repo that you can use as a reference.

* Once you are finished with this assignment. Feel free to move onto the JWT assignment found in Training Kit.
* You'll need to use this same client that you've been working with over there.

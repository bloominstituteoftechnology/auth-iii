# Client-Auth

## Setup 
Start your MongoDB server by running `mongod` from the command line.
Start up your Auth server that we extended in the mini lab.

## Todos
### Client Authentication using Server-side Sessions
* Complete the SignUp component. When the user fills out the form you should send an
axios POST request to the server to save the user to the database. 
* From there, the user will be redirected to the `/signin` page to login. 
* Upon successful login, the server will be persisting their session, and the user should be able to get a list of all the users currently stored in the database (you'll want to test this by registering a bunch of users). 

* You'll also need to complete the `RequireAuth` higher-order component in `/components/HOC`. 
* This higher-order component wraps the `users` component to ensure that only authorized users can view
that component. 

There's lots of starter code in this repo that you can use as a reference. 

### Client Authentication using JWTs
While we opted to teach sessions as the main topic with regards to implementing authentication, JWTs are by no means an inferior option compared to sessions. So, mostly due to time constraints, 
authentication using JWTs has been relegated to extra credit. That being said, the standard todos for this sprint are lighter than what you've been tasked with implementing in previous labs, 
so it is anticipated that many people will be able to at least attempt the JWT extra credit tasks. 

Clone down [this](https://github.com/LambdaSchool/Auth-JWT) repository, which is an auth 
server implementation that handles sessions with JWTs instead of sessions. Make sure you're on the _solution_ branch, not the unimplemented _master_ branch.
The point of this exercise is to have you refactor your client to work with the JWT server, not implement the JWT server itself (unless you really want to). Have a look around the code and
try to understand as much of what it is doing as you can. `npm install`, start up your `mongod`, then run `nodemon server.js` to start the server. Refactor your client to interface with this server and persist JWTs in localStorage. 

Some of the things that you'll need to change include:
 * Your actions that make calls to your server will all need to be refactored to handle the JWT token accordingly.
 * The way you check if a user is authenticated throughout your application will need to change (i.e. in the `RequireAuth` higher-order component).
 * There is no `/restricted/users` route on this server, so don't forget to update this on your client accordingly.
 * Logging out is now an entirely client-side operation. Simply invalidate the JWT client-side. Note that the server doesn't even have a `/logout` route.

## Stretch Problem
Build the entire client from scratch and duplicate this functionality. This is a great exercise to solidify your React/Redux chops!

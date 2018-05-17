import React from "react";
import { NavLink, Link } from "react-router-dom";

const Home = props => {
  return (
    <div classname="App">
      <h1>Welcome to Landing Page</h1>
      <NavLink className="nav" to="/signin">
        Sign In
      </NavLink>
      <NavLink className="nav" to="/signup">
        Register
      </NavLink>
    </div>
  );
};

export default Home;

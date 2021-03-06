import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="app">Welcome to Authors Haven</h1>
        <span>
          <Link to="/signin">Log in</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/post">post</Link>
        </span>
      </Fragment>
    );
  }
}

export default Homepage;

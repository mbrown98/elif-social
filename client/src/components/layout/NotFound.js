import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
      <Link to="/">
        {" "}
        <button className="btn btn-primary">Home</button>
      </Link>
    </Fragment>
  );
};

export default NotFound;

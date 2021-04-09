import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const You = () => {
  return (
    <div>
      <h1>You</h1>
      <li>
        <Link to={ROUTES.STATS}>Stats</Link>
      </li>
      <li>
        <Link to={ROUTES.HAVE_READ}>Have Read</Link>
      </li>
      <li>
        <Link to={ROUTES.WANT_TO_READ}>Want to Read</Link>
      </li>
    </div>
  );
};

export default You;

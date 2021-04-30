import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { PrimarySection, PrimaryH1 } from "../../style/StyledComponents";

const You = () => {
  return (
    <PrimarySection>
      <PrimaryH1>You</PrimaryH1>
      <li>
        <Link to={ROUTES.STATS}>Stats</Link>
      </li>
      <li>
        <Link to={ROUTES.HAVE_READ}>Have Read</Link>
      </li>
      <li>
        <Link to={ROUTES.WANT_TO_READ}>Want to Read</Link>
      </li>
    </PrimarySection>
  );
};

export default You;

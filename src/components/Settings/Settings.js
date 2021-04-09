import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>

      <Link to={ROUTES.UPDATE_PROFILE}>Update Profile</Link>
    </div>
  );
};

export default Settings;

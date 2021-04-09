import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Settings = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      <h1>Settings</h1>
      <Link to={ROUTES.UPDATE_PROFILE}>Update password or email</Link>
      {error && <div>{error}</div>}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Settings;

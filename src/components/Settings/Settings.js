import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  PrimarySection,
  PrimaryLink,
  PrimaryH1,
  SecondarySection,
  PrimaryButton,
  ToggleSwitch as ToggleSwitchWrapper,
} from "../../style/StyledComponents";
import { useDarkmodeContext } from "../../context/DarkmodeContext";

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

  const { theme, themeToggler } = useDarkmodeContext();

  const [isToggled, setIsToggled] = useState(false);

  return (
    <PrimarySection>
      {" "}
      <PrimaryH1>Settings</PrimaryH1>
      <SecondarySection>
        <PrimaryLink>
          <Link to={ROUTES.UPDATE_PROFILE}>Update password or email</Link>
        </PrimaryLink>

        <ToggleSwitchWrapper isToggled={isToggled}>
          <label className="switch ">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={() => {
                themeToggler();
                setIsToggled((prev) => !prev);
              }}
            />
            <span className="slider rounded" />
          </label>
        </ToggleSwitchWrapper>
        {/* <Switch
            onClick={themeToggler}
            isToggled={isToggled}
            onChange={() => setIsToggled(!isToggled)}
          /> */}
        {/* <button onClick={themeToggler}>{theme === "dark" ? "🌔" : "🌒"}</button> */}

        {error && <div>{error}</div>}
        <PrimaryButton onClick={handleLogout}>Log Out</PrimaryButton>
      </SecondarySection>
    </PrimarySection>
  );
};

export default Settings;

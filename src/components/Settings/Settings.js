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
} from "../../style/StyledComponents";
import { HiMoon, HiSun } from "react-icons/hi";

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
  // const [theme, setTheme] = useState("light");
  // const themeToggler = (theme, setTheme) => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  // const changeTheme() {
  //   if (props.theme === "light") {
  //     props.setTheme("dark")
  //   } else {
  //     props.setTheme("light")
  //   }
  // }

  // const icon = props.theme === "light" ? <HiMoon/> : <HiSun/>

  return (
    <PrimarySection>
      <PrimaryH1>Settings</PrimaryH1>

      <SecondarySection>
        <PrimaryLink>
          <Link to={ROUTES.UPDATE_PROFILE}>
            Update password or email{" "}
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="black" />
            </svg>
          </Link>
        </PrimaryLink>
        {/* <button onClick={() => themeToggler()}>Change theme</button> */}

        {/* <Toggle onClick={changeTheme}>{icon}</Toggle> */}
        {error && <div>{error}</div>}
        <PrimaryButton onClick={handleLogout}>Log Out</PrimaryButton>
      </SecondarySection>
    </PrimarySection>
  );
};

export default Settings;

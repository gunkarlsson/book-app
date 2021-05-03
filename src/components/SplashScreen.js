import React from "react";
import styled from "styled-components";
import { HiMoon, HiSun } from "react-icons/hi";
import { PrimarySection } from "../style/StyledComponents";

const SplashScreen = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const icon = props.theme === "light" ? <HiMoon /> : <HiSun />;

  return (
    <PrimarySection>
      <h1>Hello</h1>
      <p>heleelelelelel</p>
      <button onClick={changeTheme}>{icon}</button>
    </PrimarySection>
  );
};

export default SplashScreen;

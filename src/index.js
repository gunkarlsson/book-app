import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkmodeContextProvider } from "./context/DarkmodeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

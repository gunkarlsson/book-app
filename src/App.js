import Navigation from "./components/Navigation";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Search from "./components/Search/Search";
import BookDetailsPage from "./components/BookDetails/BookDetailsPage";
import Settings from "./components/Settings/Settings";
import UpdateProfile from "./components/Settings/UpdateProfile";
import You from "./components/You/You";
import Stats from "./components/Stats/Stats";
import HaveRead from "./components/You/HaveRead";
import WantToRead from "./components/You/WantToRead";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./style/Themes";
import SplashScreen from "./components/SplashScreen";
import style from "./style/style.css";
import * as ROUTES from "./constants/routes";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyle />
          <Navigation />
          <Switch>
            {/* <SplashScreen theme={theme} setTheme={setTheme} /> */}
            <Route exact path="/" component={Home} />
            <Route path={ROUTES.HOME} component={Home} />

            <PrivateRoute path={ROUTES.SEARCH} component={Search} />
            <PrivateRoute
              path={`${ROUTES.BOOKS}/:id`}
              component={BookDetailsPage}
            />
            <PrivateRoute
              path={ROUTES.SETTINGS}
              component={Settings}
              theme={theme}
              setTheme={setTheme}
            />
            <PrivateRoute
              path={ROUTES.UPDATE_PROFILE}
              component={UpdateProfile}
            />

            <PrivateRoute path={ROUTES.YOU} component={You} />
            <PrivateRoute path={ROUTES.STATS} component={Stats} />
            <PrivateRoute path={ROUTES.HAVE_READ} component={HaveRead} />
            <PrivateRoute path={ROUTES.WANT_TO_READ} component={WantToRead} />

            <Route path={ROUTES.LOG_IN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

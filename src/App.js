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

import * as ROUTES from "./constants/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Themes";
import { AuthProvider } from "./context/AuthContext";
import { useDarkmodeContext } from "./context/DarkmodeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const { theme, lightTheme, darkTheme } = useDarkmodeContext();

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={ROUTES.HOME} component={Home} />
            <PrivateRoute path={ROUTES.SEARCH} component={Search} />
            <PrivateRoute
              path={`${ROUTES.BOOKS}/:id`}
              component={BookDetailsPage}
            />
            <PrivateRoute path={ROUTES.SETTINGS} component={Settings} />
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

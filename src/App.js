import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Search from "./components/Search/Search";
import Settings from "./components/Settings/Settings";
import UpdateProfile from "./components/Settings/UpdateProfile";
import You from "./components/You/You";
import Stats from "./components/You/Stats";
import HaveRead from "./components/You/HaveRead";
import WantToRead from "./components/You/WantToRead";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={ROUTES.HOME} component={Home} />

        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.SETTINGS} component={Settings} />
        <Route path={ROUTES.UPDATE_PROFILE} component={UpdateProfile} />

        <Route path={ROUTES.YOU} component={You} />
        <Route path={ROUTES.STATS} component={Stats} />
        <Route path={ROUTES.HAVE_READ} component={HaveRead} />
        <Route path={ROUTES.WANT_TO_READ} component={WantToRead} />

        <Route path={ROUTES.LOG_IN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

export default App;

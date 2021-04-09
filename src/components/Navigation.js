import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SEARCH}>Search</Link>
        </li>
        <li>
          <Link to={ROUTES.YOU}>You</Link>
        </li>
        <li>
          <Link to={ROUTES.SETTINGS}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

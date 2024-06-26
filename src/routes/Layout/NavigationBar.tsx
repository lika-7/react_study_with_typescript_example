import { Link } from "../../components/Link";
import { Link as RRLink } from "react-router-dom";
import { useAuth } from "../../contexts";

const NavigationBar = () => {
  const { loggedUser } = useAuth();
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        {loggedUser && (
          <Link to="/bord" className="btn btn-link ml-4">
            Board
          </Link>
        )}
      </div>
      <div className="flex p-2 items-center">
        {loggedUser && (
          <RRLink to="/login" className="btn btn-sm btn-primary">
            LOGIN
          </RRLink>
        )}
        {loggedUser && (
          <RRLink
            to="/signup"
            className="ml-4 btn btn-sm btn-outline btn-primary"
          >
            SIGNUP
          </RRLink>
        )}
        {loggedUser && (
          <RRLink to="/logout" className="ml-4 mr-4">
            LOGOUT
          </RRLink>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

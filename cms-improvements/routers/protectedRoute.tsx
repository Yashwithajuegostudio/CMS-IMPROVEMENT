import { useRouter } from "next/router";
import { useContext } from "react";
import Login from "../pages/login";
import { AuthContext } from "../src/context/AuthProvider";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useContext(AuthContext);
  const router = useRouter();

  const isValidUser = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  //Redirecting to login page when current router is auth route
  return isValidUser() ? children : <Login />;
};

export default ProtectedRoute;

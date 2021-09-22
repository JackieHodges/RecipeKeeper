import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <li onClick={() => logout({ returnTo: window.location.origin })} className="nav-link">
        Log Out
      </li>
    ))
};

export default LogoutButton;
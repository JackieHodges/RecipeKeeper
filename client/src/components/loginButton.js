import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div onClick={() => loginWithRedirect()} className="title-bar-text" >
        Log In
      </div>
    )
  )
};

export default LoginButton;
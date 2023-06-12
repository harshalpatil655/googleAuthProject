import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const Login = () => {
  const handleLoginSuccess = async (response) => {
    console.log("Google Sign-In successful:", response);

    const details = jwtDecode(response.credential);
    console.log(details);
  };

  const handleLoginFailure = (response) => {
    console.log("Google Sign-In failed:", response);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="975252585333-gnfdfqob41itrqkjqjct69qnaaokhdtc.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </GoogleOAuthProvider>{" "}
    </div>
  );
};

export default Login;

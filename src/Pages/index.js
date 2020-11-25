import React from "react";

const Login = React.lazy(() => import("./LogInPage"));
const SignUp = React.lazy(() => import("./SignUpPage"));

const Pages = {
  Login,
  SignUp
};

export default Pages;

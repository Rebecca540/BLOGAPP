import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUpForms";
import LogIn from "./Components/LoginForms";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <div className="App">
        <SignUp />
        <LogIn />
      </div>
    </BrowserRouter>
  );
};

export default App;

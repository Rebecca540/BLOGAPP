import React from "react";
import Pages from "./Pages";
import { Route, Switch, Redirect } from "react-router-dom";

const Router = () => {
  return (
    <React.Suspense fallback={<h6>Loading...</h6>}>
      <Switch>
        <Route path="/login" omponent={Pages.Login} />
        <Route path="/signup" component={Pages.SignUp} />
        <Redirect from="*" to="/page-not-found" />
      </Switch>
    </React.Suspense>
  );
};
export default Router;

import React, { useContext } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import routes from "../Routes/routes";
import lazyComponent from "./lazyComponent";
import ERROR404 from "../Pages/Error/404";
import ERROR500 from "../Pages/Error/500";
import { AppContext } from "./../Components/Context/Context";
const Router = (props) => {
  let { authenticated } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/">
        {authenticated ? (
          <Redirect exact push to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/login">
        {authenticated ? (
          <Redirect exact push to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      {routes.map((route, index) => {
        if (route.isPrivate) {
          return (
            <PrivateRoute
              key={index}
              exact
              path={route.routepath}
              component={lazyComponent(
                route.componentName,
                route.componentPath
              )}
            />
          );
        } else {
          return (
            <Route
              key={index}
              path={route.routepath}
              component={lazyComponent(
                route.componentName,
                route.componentPath
              )}
            />
          );
        }
      })}
      {/* error routes */}
      <Route path="/error/500" component={ERROR500} />
      <Route path="*" component={ERROR404} />
    </Switch>
  );
};

export default withRouter(Router);

import React, { useContext, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../Components/Context/Context";
// import { appContext } from "../Router/index";
const PrivateRoute = (props) => {
  const { authenticated } = useContext(AppContext);
  const { component, ...others } = props;
  const Component = component;
  // Route conditions
  return !authenticated ? (
    <Route
      {...others}
      render={(props) => (
        <Fragment>
          <Redirect
            exact
            to={{
              pathname: props.location.pathname,
              search: `?redirect=${props.location.pathname}`,
              state: { from: props.location },
            }}
          />
          {console.log(props)}
        </Fragment>
      )}
    />
  ) : (
    <Fragment>
      <Route {...others} render={(props) => <Component {...props} />} />
    </Fragment>
  );
};

export default PrivateRoute;

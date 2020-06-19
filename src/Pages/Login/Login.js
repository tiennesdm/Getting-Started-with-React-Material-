import React, { useContext, Fragment, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AppContext } from "../../Components/Context/Context";

import { useHistory } from "react-router-dom";

function AuthLogin() {
  let history = useHistory();
  const { authenticated, Login } = useContext(AppContext);
  const userLogin = () => {
    Login();
  };
  useEffect(() => {
    if (authenticated === true) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);
  return (
    <Fragment>
      {!authenticated ? <Button onClick={userLogin}>Login</Button> : null}
    </Fragment>
  );
}

export default AuthLogin;

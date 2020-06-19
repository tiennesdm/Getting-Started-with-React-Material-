import React, { Fragment, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { AppContext } from "./../../Components/Context/Context";
export default function Logout() {
  let history = useHistory();
  let { authenticated, setauthenticated } = useContext(AppContext);
  const Logout = () => {
    localStorage.removeItem("login_time");
    setauthenticated(false);
    // localStorage.setItem("authenticated", false);
    localStorage.removeItem("authenticated");
    history.push("/login");
  };
  let timeOut;
  let events = [
    "mousedown",
    "load",
    "mousemove",
    "click",
    "scroll",
    "keypress",
    "touchstart",
    "touchmove",
  ];
  const clearTime = () => {
    clearTimeout(timeOut);
  };
  const startTime = () => {
    timeOut = setTimeout(() => {
      Logout();
    }, 10 * 1000);
  };
  useEffect(() => {
    if (authenticated === false) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, () => {
        resetTimeOut(event);
      });
    });
  });
  const resetTimeOut = (event) => {
    console.log("....event ", event);
    if (event) {
      clearTime();
      startTime();
    }
  };
  return (
    <Fragment>
      {authenticated ? <Button onClick={Logout}>Logout</Button> : null}
    </Fragment>
  );
}

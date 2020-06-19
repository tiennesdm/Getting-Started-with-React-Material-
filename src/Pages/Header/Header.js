import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Components/Context/Context";
import AuthLogin from "../Login/Login";
import menus from "./../../Menus/menus";

export default function Header() {
  const { authenticated } = useContext(AppContext);

  return (
    <Fragment>
      <Fragment>
        {authenticated
          ? menus.length > 0
            ? menus.map((menu, id) => {
                return (
                  <ul key={id}>
                    <Link to={menu.link}> {menu.label}</Link>
                  </ul>
                );
              })
            : null
          : null}
      </Fragment>
      {authenticated ? null : <AuthLogin />}
    </Fragment>
  );
}

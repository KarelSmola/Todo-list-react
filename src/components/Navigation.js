import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import Button from "./UI/Button";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h1>Todo list</h1>
      </div>
      <div className={classes["nav-info"]}>
        <p className={classes["nav-greeting"]}>
          {`User: ${ctx.userNameInput}`}
        </p>
        <Button className={classes["logout-btn"]} onClick={ctx.loggedOut}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

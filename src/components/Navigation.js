import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import Button from "./UI/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  console.log(ctx.userName);

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h1>Todo list</h1>
      </div>
      <div className={classes["nav-info"]}>
        <p className={classes["nav-greeting"]}>Hello {ctx.userNameInput}</p>
        <p className={classes["nav-todos-info"]}>
          You have {props.amountTodos} items to do
        </p>
      </div>
      <Button className={classes["logout-btn"]} onClick={ctx.loggedOut}>
        Logout
      </Button>
    </nav>
  );
};

export default Navigation;

import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const InfoBar = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <div>
        <h1>Todo list</h1>
      </div>
      <div>
        <p>Hello Karel</p>
        <p>You have 5 items to do</p>
        <button onClick={ctx.loggedOut}>Logout</button>
      </div>
    </nav>
  );
};

export default InfoBar;

import React from "react";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes["login-form"]}>
      <div className={classes["label-container"]}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={classes["label-container"]}>
        <label htmlFor="name">User name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes["label-container"]}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;

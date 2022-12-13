import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import Button from "../UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const ctx = useContext(AuthContext);

  return (
    <form onSubmit={ctx.loginSubmitHandler} className={classes["login-form"]}>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="email">
          Email
        </label>
        <input
          className={classes["login-form-input"]}
          type="text"
          id="email"
          value={ctx.emailInput}
          onChange={ctx.emailChangeHandler}
        />
      </div>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="userName">
          User name
        </label>
        <input
          className={classes["login-form-input"]}
          type="text"
          id="userName"
          value={ctx.userNameInput}
          onChange={ctx.userNameChangeHandler}
        />
      </div>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="password">
          Password
        </label>
        <input
          className={classes["login-form-input"]}
          type="password"
          id="password"
          value={ctx.passwordInput}
          onChange={ctx.passwordChangeHandler}
        />
      </div>
      <Button className={classes["login-btn"]}>Login</Button>
    </form>
  );
};

export default LoginForm;

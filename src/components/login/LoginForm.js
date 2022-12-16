import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import Button from "../UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const ctx = useContext(AuthContext);

  const userNameClasses = ctx.userNameIsInvalid
    ? `${classes["login-form-input"]} ${classes["invalid-input"]}`
    : classes["login-form-input"];

  const emailClasses = ctx.emailIsInvalid
    ? `${classes["login-form-input"]} ${classes["invalid-input"]}`
    : classes["login-form-input"];

  const passwordClasses = ctx.passwordIsInvalid
    ? `${classes["login-form-input"]} ${classes["invalid-input"]}`
    : classes["login-form-input"];

  return (
    <form onSubmit={ctx.loginSubmitHandler} className={classes["login-form"]}>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="email">
          Email
        </label>
        <input
          className={emailClasses}
          type="text"
          id="email"
          value={ctx.emailInput}
          onChange={ctx.emailChangeHandler}
          onBlur={ctx.emailBlurHandler}
        />
      </div>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="userName">
          User name
        </label>
        <input
          className={userNameClasses}
          type="text"
          id="userName"
          value={ctx.userNameInput}
          onChange={ctx.userNameChangeHandler}
          onBlur={ctx.userNameBlurHandler}
        />
      </div>
      <div className={classes["label-container"]}>
        <label className={classes["login-form-label"]} htmlFor="password">
          Password
        </label>
        <input
          className={passwordClasses}
          type="password"
          id="password"
          value={ctx.passwordInput}
          onChange={ctx.passwordChangeHandler}
          onBlur={ctx.passwordBlurHandler}
        />
      </div>
      <Button disabled={!ctx.formIsValid} className={classes["login-btn"]}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

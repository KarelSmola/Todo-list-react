import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const ctx = useContext(AuthContext);

  return (
    <form onSubmit={ctx.loginSubmitHandler} className={classes["login-form"]}>
      <div className={classes["label-container"]}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={ctx.emailInput}
          onChange={ctx.emailChangeHandler}
        />
      </div>
      <div className={classes["label-container"]}>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          value={ctx.userNameInput}
          onChange={ctx.userNameChangeHandler}
        />
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

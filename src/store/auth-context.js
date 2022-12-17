import React, { useState } from "react";
import useInput from "../hooks/use-input";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userName: "",
  loggedIn: () => {},
  loggedOut: () => {},
  userNameChangeHandler: () => {},
  userNameBlurHandler: () => {},
  emailChangeHandler: () => {},
  emailBlurHandler: () => {},
  passwordChangeHandler: () => {},
  passwordBlurHandler: () => {},
  loginSubmitHandler: () => {},
  formIsValid: false,
  userNameInput: "",
  emailInput: "",
  passwordInput: "",
  userNameIsInvalid: "",
  emailIsInvalid: "",
  passwordIsInvalid: "",
});

export const AuthContextProvider = (props) => {
  const {
    inputValue: userNameInput,
    valueIsValid: userNameIsValid,
    valueIsInvalid: userNameIsInvalid,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: userNameBlurHandler,
    resetValueInput: userNameInputReset,
    resetValueBlur: userNameBlurReset,
  } = useInput((value) => value.trim().length > 0);

  const {
    inputValue: emailInput,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    inputValue: passwordInput,
    valueIsValid: passwordIsValid,
    valueIsInvalid: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    resetValue: passwordReset,
  } = useInput((value) => value.trim().length > 5);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let formIsValid = false;

  if (userNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loggedIn = () => {
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setIsLoggedIn(false);
    userNameInputReset();
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    setIsLoggedIn(true);

    userNameBlurReset();
    emailReset();
    passwordReset();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName: userNameInput,
        loggedIn,
        loggedOut,
        userNameChangeHandler,
        userNameBlurHandler,
        emailChangeHandler,
        emailBlurHandler,
        passwordChangeHandler,
        passwordBlurHandler,
        loginSubmitHandler,
        formIsValid,
        userNameInput,
        emailInput,
        passwordInput,
        userNameIsInvalid,
        emailIsInvalid,
        passwordIsInvalid,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

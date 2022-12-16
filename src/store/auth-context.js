import React, { useState } from "react";

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
  userNameInput: "",
  emailInput: "",
  passwordInput: "",
  userNameIsInvalid: "",
  emailIsInvalid: "",
  passwordIsInvalid: "",
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userNameInput, setUserNameInput] = useState("");
  const [userNameBlur, setUserNameBlur] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordBlur, setPasswordBlur] = useState(false);

  const userNameIsValid = userNameInput.trim().length > 0;
  const userNameIsInvalid = !userNameIsValid && userNameBlur;

  const emailIsValid = emailInput.includes("@");
  const emailIsInvalid = !emailIsValid && emailBlur;

  const passwordIsValid = passwordInput.trim().length > 5;
  const passwordIsInvalid = !passwordIsValid && passwordBlur;

  const loggedIn = () => {
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setIsLoggedIn(false);
    setUserNameInput("");
  };

  const userNameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const userNameBlurHandler = () => {
    setUserNameBlur(true);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailBlur(true);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const passwordBlurHandler = () => {
    setPasswordBlur(true);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    if (passwordInput.trim().length < 6) {
      console.log("Write correct password");
      return;
    }

    setIsLoggedIn(true);

    setEmailInput("");
    setPasswordInput("");
    setUserNameBlur(false);
    setEmailBlur(false);
    setPasswordBlur(false);
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

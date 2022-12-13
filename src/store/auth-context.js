import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userName: "",
  loggedIn: () => {},
  loggedOut: () => {},
  userNameChangeHandler: () => {},
  emailChangeHandler: () => {},
  passwordChangeHandler: () => {},
  loginSubmitHandler: () => {},
  userNameInput: "",
  emailInput: "",
  passwordInput: "",
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    if (!emailInput.includes("@")) {
      console.log("Write correct email");
      return;
    }

    if (userNameInput.trim().length < 1) {
      console.log("Write correct name");
      return;
    }

    if (passwordInput.trim().length < 6) {
      console.log("Write correct password");
      return;
    }

    setIsLoggedIn(true);

    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName: userNameInput,
        loggedIn,
        loggedOut,
        userNameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        loginSubmitHandler,
        userNameInput,
        emailInput,
        passwordInput,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

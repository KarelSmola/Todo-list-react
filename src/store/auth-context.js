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
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const loggedIn = () => {
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setIsLoggedIn(false);
  };

  const userNameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {};

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    if (userNameInput.trim() === "") {
      return;
    }

    if (!emailInput.includes("@")) {
      return;
    }

    setIsLoggedIn(true);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

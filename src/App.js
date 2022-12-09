import React, { Fragment } from "react";
import LoginForm from "./components/login/LoginForm";
import InfoBar from "./components/InfoBar";

import "./App.css";

function App() {
  return (
    <Fragment>
      <InfoBar />
      <LoginForm />
    </Fragment>
  );
}

export default App;

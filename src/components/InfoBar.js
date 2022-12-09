import React from "react";

import classes from "./InfoBar.module.css";

const InfoBar = () => {
  return (
    <nav>
      <div>
        <h1>Todo list</h1>
      </div>
      <div>
        <p>Hello Karel</p>
        <p>You have 5 items to do</p>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default InfoBar;

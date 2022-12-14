import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [inputTodo, setInputTodo] = useState("");
  const ctx = useContext(AuthContext);

  const todoChangeHandler = (event) => {
    setInputTodo(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    if (inputTodo.trim().length < 1) {
      console.log("Write correct todo");
      return;
    }

    props.onAddTodo(inputTodo);

    setInputTodo("");
  };

  const emojis = (todos) => {
    if (todos <= 3) {
      return "😃";
    }

    if (todos > 3 && todos <= 5) {
      return "😐";
    }

    if (todos > 5) {
      return "😕";
    }
  };

  const todoFormBcgColor = (todos) => {
    if (todos <= 3) {
      return classes["todo-form"];
    }

    if (todos > 3 && todos <= 5) {
      return `${classes["todo-form"]} ${classes.neutral}`;
    }

    if (todos > 5) {
      return `${classes["todo-form"]} ${classes.confused}`;
    }
  };

  // &#128512; grimming face 😃
  // &#128528; neutral face 😐
  // &#128533; confused face 😕

  return (
    <form
      className={todoFormBcgColor(props.amountTodos)}
      onSubmit={todoSubmitHandler}
    >
      <p className={classes["todo-info"]}>
        {`${ctx.userName}, you have ${props.amountTodos} task to do ${emojis(
          props.amountTodos
        )}`}
      </p>
      <div className={classes["todo-container"]}>
        <label className={classes["todo-label"]} htmlFor="todo">
          New todo
        </label>
        <input
          className={classes["todo-input"]}
          type="text"
          id="todo"
          onChange={todoChangeHandler}
          value={inputTodo}
        />
        <Button className={classes["todo-btn"]}>Add Todo</Button>
      </div>
    </form>
  );
};

export default TodoForm;

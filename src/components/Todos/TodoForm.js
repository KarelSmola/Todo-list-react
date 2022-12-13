import React, { useState } from "react";

import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [inputTodo, setInputTodo] = useState("");

  const todoChangeHandler = (event) => {
    setInputTodo(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(inputTodo);

    setInputTodo("");
  };

  return (
    <form className={classes["todo-form"]} onSubmit={todoSubmitHandler}>
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
    </form>
  );
};

export default TodoForm;

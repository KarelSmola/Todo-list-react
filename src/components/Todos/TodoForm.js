import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import useInput from "../../hooks/use-input";

import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const {
    inputValue: inputTodo,
    valueIsValid: todoIsValid,
    valueIsInvalid: todoIsInvalid,
    valueChangeHandler: todoChangeHandler,
    valueBlurHandler: todoBlurHandler,
    valueInputError: todoInputError,
    resetValue: resetTodo,
  } = useInput((value) => value !== "");

  const ctx = useContext(AuthContext);

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    if (!todoIsValid) {
      todoInputError();
      return;
    }

    props.onAddTodo(inputTodo);

    resetTodo();
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

  const todoInputClasses = todoIsInvalid
    ? `${classes["todo-input"]} ${classes["todo-invalid-input"]}`
    : classes["todo-input"];

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
          className={todoInputClasses}
          type="text"
          id="todo"
          onChange={todoChangeHandler}
          onBlur={todoBlurHandler}
          value={inputTodo}
        />
        <Button className={classes["todo-btn"]}>Add Todo</Button>
      </div>
    </form>
  );
};

export default TodoForm;

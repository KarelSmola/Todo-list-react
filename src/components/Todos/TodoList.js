import React from "react";

import Button from "../UI/Button";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <ul className={classes["todo-list"]}>
      {props.todos.map((todo) => (
        <li className={classes.todo} key={todo.id}>
          <p className={classes["todo-title"]}>{todo.title}</p>
          <Button
            className={classes["todo-btn"]}
            onClick={() => {
              props.onRemove(todo.id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

import React, { useState } from "react";

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
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="todo">New todo</label>
      <input
        type="text"
        id="todo"
        onChange={todoChangeHandler}
        value={inputTodo}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;

import React, { Fragment, useState } from "react";
import LoginForm from "./components/login/LoginForm";
import InfoBar from "./components/InfoBar";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), title: newTodo },
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodoList((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== todoId;
      })
    );
  };

  return (
    <Fragment>
      <InfoBar />

      <LoginForm />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todoList} onRemove={deleteTodo} />
    </Fragment>
  );
}

export default App;

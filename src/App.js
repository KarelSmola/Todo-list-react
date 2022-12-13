import React, { Fragment, useState, useContext } from "react";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/Navigation";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import AuthContext from "./store/auth-context";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const ctx = useContext(AuthContext);

  const amountTodos = todoList.length;

  const addTodo = (newTodo) => {
    setTodoList((prevTodos) => [
      { id: Math.random(), title: newTodo },
      ...prevTodos,
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
      {ctx.isLoggedIn && <Navigation amountTodos={amountTodos} />}

      {!ctx.isLoggedIn && <LoginForm />}
      {ctx.isLoggedIn && <TodoForm onAddTodo={addTodo} />}
      <TodoList todos={todoList} onRemove={deleteTodo} />
    </Fragment>
  );
}

export default App;

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  return (
    <>
      <div className="app">
        <h1>Do it!</h1>
        <TodoForm addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo, id) => (
            <Todo
              key={id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

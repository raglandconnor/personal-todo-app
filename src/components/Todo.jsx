import React, { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "./TodoItem/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <div className="todo--container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todo;

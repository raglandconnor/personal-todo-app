import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "./TodoItem/TodoItem";

function Todo() {
  return (
    <div className="todo">
      <div className="todo--container">
        <TodoForm />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todo;

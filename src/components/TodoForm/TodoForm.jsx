import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <div className="todo-form">
      <input type="text" className="todo-input" placeholder="Create a todo" />
      <button className="todo-submit">Create</button>
    </div>
  );
}

export default TodoForm;

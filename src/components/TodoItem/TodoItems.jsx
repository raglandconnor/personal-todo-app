import React from "react";
import "./TodoItems.css";
import { TiDeleteOutline } from "react-icons/ti";

function TodoItem({ todos, handleRemove }) {
  const todoElements = todos.map((todo) => {
    return (
      <div key={todo.id} className="todo-item">
        <p>{todo.text}</p>
        <TiDeleteOutline
          className="todo-remove"
          onClick={() => handleRemove(todo.id)}
        />
      </div>
    );
  });

  return <>{todoElements}</>;
}

export default TodoItem;

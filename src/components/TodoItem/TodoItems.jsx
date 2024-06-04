import React from "react";
import "./TodoItems.css";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit3 } from "react-icons/fi";

function TodoItem({ todos, handleRemove }) {
  const todoElements = todos.map((todo) => {
    return (
      <div key={todo.id} className="todo-item">
        <p className="todo-text">{todo.text}</p>
        <div>
          <FiEdit3 className="todo-edit" />
          <TiDeleteOutline
            className="todo-remove"
            onClick={() => handleRemove(todo.id)}
          />
        </div>
      </div>
    );
  });

  return <>{todoElements}</>;
}

export default TodoItem;

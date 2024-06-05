import React, { useState } from "react";
import "./TodoItems.css";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDoneOutline } from "react-icons/md";

function TodoItem({ todos, handleRemove, handleSubmitEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleEdit = (e) => {
    const { value } = e.target;
    setEditText(value);
  };

  const handleToggleEdit = (todo) => {
    if (!isEditing) {
      setEditText(todo.text);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e, todo) => {
    if (e.keyCode === 13) {
      handleSubmitEdit(todo.id, editText);
      setEditText("");
      handleToggleEdit(todo);
    }
  };

  const todoElements = todos.map((todo) => {
    return (
      <div key={todo.id} className="todo-item">
        {isEditing ? (
          <input
            className="todo-edit-input"
            type="text"
            placeholder="Edit todo"
            value={editText}
            onChange={handleEdit}
            onKeyDown={(e) => handleKeyDown(e, todo)}
          />
        ) : (
          <p className="todo-text">{todo.text}</p>
        )}
        <div>
          {isEditing ? (
            <MdOutlineDoneOutline
              className="todo-edit"
              onClick={() => {
                handleSubmitEdit(todo.id, editText);
                setEditText("");
                handleToggleEdit(todo);
              }}
            />
          ) : (
            <FiEdit3
              className="todo-edit"
              onClick={() => handleToggleEdit(todo)}
            />
          )}
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

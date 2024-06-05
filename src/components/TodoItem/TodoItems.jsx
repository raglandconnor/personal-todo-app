import React, { useState, useRef, useEffect } from "react";
import "./TodoItems.css";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDoneOutline } from "react-icons/md";
import TodoItemCountdown from "../TodoItemCountdown/TodoItemCountdown";

function TodoItems({ todos, handleRemove, handleSubmitEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRefs = useRef({});

  useEffect(() => {
    if (editingId !== null && inputRefs.current[editingId]) {
      inputRefs.current[editingId].focus();
    }
  }, [editingId]);

  const handleEdit = (e) => {
    const { value } = e.target;

    setEditText(value);
  };

  const handleToggleEdit = (todo) => {
    if (editingId !== todo.id) {
      setEditText(todo.text);
      setEditingId(todo.id);
    } else {
      setEditingId(null);
    }
  };

  const handleKeyDown = (e, todo) => {
    if (editText !== "") {
      if (e.keyCode === 13) {
        handleSubmitEdit(todo.id, editText);
        setEditText("");
        handleToggleEdit(todo);
      }
    }
  };

  const todoElements = todos.map((todo) => {
    return (
      <div key={todo.id} className="todo-item">
        {editingId === todo.id ? (
          <input
            className="todo-edit-input"
            type="text"
            placeholder="Edit todo"
            value={editText}
            onChange={handleEdit}
            onKeyDown={(e) => handleKeyDown(e, todo)}
            ref={(el) => (inputRefs.current[todo.id] = el)}
          />
        ) : (
          <p className="todo-text">{todo.text}</p>
        )}
        <div className="timer-options">
          <TodoItemCountdown date={todo.date} />
          {editingId === todo.id ? (
            <MdOutlineDoneOutline
              className="todo-edit"
              onClick={() => {
                if (editText !== "") {
                  handleSubmitEdit(todo.id, editText);
                  setEditText("");
                  setEditingId(null);
                } else {
                  inputRefs.current[todo.id].focus();
                }
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

export default TodoItems;

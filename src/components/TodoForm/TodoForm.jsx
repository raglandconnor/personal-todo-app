import React, { useState } from "react";
import "./TodoForm.css";
import { nanoid } from "nanoid";

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") return;

    setTodos([
      {
        id: nanoid(),
        text: input,
      },
      ...todos,
    ]);

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Create a todo"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-submit">Add</button>
    </form>
  );
}

export default TodoForm;

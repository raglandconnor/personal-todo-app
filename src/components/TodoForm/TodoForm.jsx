import React, { useState, useRef, useEffect } from "react";
import "./TodoForm.css";
import { nanoid } from "nanoid";

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setSeconds(0);
    return currentDate;
  });

  const formatDateTime = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${month}/${day} ${hours}:${formattedMinutes}${ampm}`;
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getStringDate = () => {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date - timezoneOffset)
      .toISOString()
      .slice(0, 16);
    return localISOTime;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "text") {
      setInput(value);
    } else if (name === "date") {
      setDate(new Date(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") return;

    const newTodo = {
      id: nanoid(),
      text: input,
      date: date,
    };

    const sortedTodos = [newTodo, ...todos].sort((a, b) => a.date - b.date);
    setTodos(sortedTodos);

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
        name="text"
        ref={inputRef}
      />
      <span className="datepicker-toggle">
        <button className="datepicker-toggle-button">
          {formatDateTime(date)}
        </button>
        <input
          type="datetime-local"
          className="datepicker-input"
          value={getStringDate()}
          name="date"
          onChange={handleChange}
          required={true}
        />
      </span>
      <button className="todo-submit">Add</button>
    </form>
  );
}

export default TodoForm;

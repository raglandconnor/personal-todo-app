import React, { useState, useEffect } from "react";
import "./TodoItemCountdown.css";

function TodoItemCountdown({ date }) {
  const [isFinished, setIsFinished] = useState(false);
  const [countdown, setCountdown] = useState(getCountdownString(date));
  const [todoStyling, setTodoStyling] = useState(false);

  function getCountdownString(date) {
    if (isFinished) return "Time's up!";
    const now = new Date();
    const diff = date - now;

    if (diff.valueOf() < 0) {
      setIsFinished(true);
      return "Time's up!";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days === 0 && hours === 0 && minutes === 0) {
      return `${seconds}s`;
    }
    if (days === 0 && hours === 0 && minutes > 9) {
      return `${minutes}m`;
    }
    if (days === 0 && hours === 0) {
      return `${minutes}m ${seconds}s`;
    }
    if (days === 0) {
      return `${hours}h ${minutes}m`;
    }

    return `${days}d ${hours}h ${minutes}m`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdownString(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval;
    if (isFinished) {
      interval = setInterval(() => {
        setTodoStyling((prevTodoStyle) => !prevTodoStyle);
      }, 750);
    }

    return () => clearInterval(interval);
  }, [isFinished]);

  return (
    <div>
      <p
        className={
          todoStyling && isFinished
            ? "todo-date todo-finished-red"
            : "todo-date"
        }
      >
        {countdown}
      </p>
    </div>
  );
}

export default TodoItemCountdown;

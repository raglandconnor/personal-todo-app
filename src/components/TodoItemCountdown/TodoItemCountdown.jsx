import React, { useState, useEffect } from "react";
import "./TodoItemCountdown.css";

function TodoItemCountdown({ date }) {
  const [countdown, setCountdown] = useState(getCountdownString(date));

  function getCountdownString(date) {
    const now = new Date();
    const diff = date - now;

    if (diff.valueOf() < 0) {
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

  return (
    <div>
      <p className="todo-date">{countdown}</p>
    </div>
  );
}

export default TodoItemCountdown;

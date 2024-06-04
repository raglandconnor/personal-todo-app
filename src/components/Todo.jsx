import React, { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoItems from "./TodoItem/TodoItems";

function Todo() {
  const [todos, setTodos] = useState([]);

  const removeTodoItem = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <div className="todo--container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoItems todos={todos} handleRemove={removeTodoItem} />
      </div>
    </div>
  );
}

export default Todo;

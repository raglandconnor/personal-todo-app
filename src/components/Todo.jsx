import React, { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoItems from "./TodoItem/TodoItems";

function Todo() {
  const [todos, setTodos] = useState([]);

  const removeTodoItem = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  };

  const handleSubmitEdit = (todoId, editText) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          text: editText,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <div className="todo--container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <div className="todo-items--container">
          <TodoItems
            todos={todos}
            handleRemove={removeTodoItem}
            handleSubmitEdit={handleSubmitEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;

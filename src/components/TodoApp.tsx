import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoStatus from "./TodoStatus";
import TodoDetails from "./helper";
const { ipcRenderer } = window.require("electron");

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoDetails[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");

  const loadTodos = () => {
    // Send a message to the main process to load todos
    ipcRenderer.invoke("load-todos").then((loadedTodos: TodoDetails[]) => {
      setTodos(loadedTodos);
    });
  };

  const saveTodos = (updatedTodos: TodoDetails[]) => {
    // Send a message to the main process to save todos
    ipcRenderer.send("save-todos", updatedTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []); // Load todos on component mount

  useEffect(() => {
    if (todos.length > 0) {
      saveTodos(todos);
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newId = crypto.randomUUID();
    const newTodoItem: TodoDetails = {
      id: newId,
      text: text,
      done: false,
    };
    setTodos([...todos, newTodoItem]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      // Save the updated todos
      saveTodos(updatedTodos);
      // Return the updated todos to setTodos
      return updatedTodos;
    });
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id: string, newText: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "inProgress") {
      return !todo.done;
    } else if (statusFilter === "done") {
      return todo.done;
    }
    return true;
  });

  return (
    <div>
      <h1>Tasks</h1>
      <TodoStatus onFilterChange={setStatusFilter} />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={filteredTodos} onToggleComplete={toggleComplete} onRemove={removeTodo} onEdit={editTodo} />
    </div>
  );
};

export default TodoApp;

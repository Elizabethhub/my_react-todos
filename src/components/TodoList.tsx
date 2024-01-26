import React from "react";
import TodoItem from "./TodoItem";
import TodoDetails from "./helper";
import { StyledList } from "./TodoListStyled";

interface TodoListProps {
  todos: TodoDetails[];
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onRemove, onEdit }) => {
  return (
    <StyledList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </StyledList>
  );
};

export default TodoList;

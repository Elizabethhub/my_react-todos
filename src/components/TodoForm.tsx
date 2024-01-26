import React, { useState } from "react";
import { Button, FormContainer, Input } from "./TodoFormStyledd";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <FormContainer>
      <Input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={addTodo}>Add</Button>
    </FormContainer>
  );
};

export default TodoForm;

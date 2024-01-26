import React, { useState } from "react";
import TodoDetails from "./helper";
import {
  ButtonsWrapper,
  StyledButton,
  StyledCheckbox,
  StyledText,
  TodoItemContainer,
  TodoTextContainer,
} from "./TodoItemStyled";

interface TodoItemProps {
  todo: TodoDetails;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onRemove, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <TodoItemContainer>
      <TodoTextContainer>
        <StyledCheckbox type="checkbox" checked={todo.done} onChange={() => onToggleComplete(todo.id)} />
        <StyledText done={todo.done}>{todo.text}</StyledText>
      </TodoTextContainer>

      <ButtonsWrapper>
        {isEditing ? (
          <div>
            <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            <StyledButton onClick={handleSave}>Save</StyledButton>
            <StyledButton onClick={handleCancel}>Cancel</StyledButton>
          </div>
        ) : (
          <div>
            <StyledButton onClick={() => onRemove(todo.id)}>Remove</StyledButton>
            <StyledButton onClick={handleEdit}>Edit</StyledButton>
          </div>
        )}
      </ButtonsWrapper>
    </TodoItemContainer>
  );
};

export default TodoItem;

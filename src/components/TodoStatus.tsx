import React from "react";
import { BoldLabel, RadioLabel, StatusContainer } from "./TodoStatusStyled";

interface TodoStatusProps {
  onFilterChange: (status: string) => void;
}

const TodoStatus: React.FC<TodoStatusProps> = ({ onFilterChange }) => {
  return (
    <StatusContainer>
      <BoldLabel>Status: </BoldLabel>
      <RadioLabel>
        <input type="radio" name="status" id="all" onChange={() => onFilterChange("all")} />
        All
      </RadioLabel>
      <RadioLabel>
        <input type="radio" name="status" id="inProgress" onChange={() => onFilterChange("inProgress")} />
        In Progress
      </RadioLabel>
      <RadioLabel>
        <input type="radio" name="status" id="done" onChange={() => onFilterChange("done")} />
        Done
      </RadioLabel>
    </StatusContainer>
  );
};

export default TodoStatus;

import React from "react";
import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TodoTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; /* Grow to fill available space */
`;

export const StyledCheckbox = styled.input`
  margin-right: 8px;
`;
export const StyledText: React.FC<{ done: boolean; children: React.ReactNode }> = ({ done, children }) => (
  <span style={{ flex: 1, marginRight: "8px", textDecoration: done ? "line-through" : "none" }}>{children}</span>
);

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledButton = styled.button`
  margin-left: 4px;
`;

import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

export const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

import { Container, TodoAppContainer } from "./AppStyled";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <Container>
      <TodoAppContainer>
        <TodoApp />
      </TodoAppContainer>
    </Container>
  );
}

export default App;

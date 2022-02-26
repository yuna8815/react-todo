import { Component } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoHeade from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  hr {
    margin: 0;
    height: 1px;
    border: 0;
    background: #E5E7EB;
  }
`;

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHeade />
          <hr />
          <TodoList />
          <TodoInput />
        </TodoTemplate>
      </TodoProvider>
    );
  }
}

export default App;

import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.section`
    flex: 1;
    padding: 12px 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    & + section {margin: 16px 0 0;}

    @media screen and (min-width: 960px) {
        & + section {margin: 0 0 0 16px;}
    }

    h2 {
        margin: 12px 16px;
        font-size: 20px;
    }
`;

function TodoList ({ title, checked }) {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            <h2>{title}</h2>
            {todos.map(todo => {
                if (checked !== todo.done) return null;

                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                )}
            )}
        </TodoListBlock>
    );
}

export default TodoList;
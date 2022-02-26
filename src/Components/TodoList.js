import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    width: 100%;
    padding: 12px;

    @media screen and (min-width: 512px) {
        width: 512px;
        margin: 0 auto;
    }

    section {
        padding: 12px 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    h2 {
        margin: 12px 16px;
        font-size: 20px;
    }
`;

function TodoList () {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            <section>
                <h2>할 일 리스트</h2>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                ))}
            </section>
        </TodoListBlock>
    );
}

export default TodoList;
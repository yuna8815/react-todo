import TodoList from './TodoList';
import styled from 'styled-components';

const TodoListTemplateBlock = styled.div`
    display: block;
    padding: 12px;

    @media screen and (min-width: 960px) {
        display: flex;
        width: 960px;
        margin: 0 auto;
    }
`;

function TodoListTemplate () {
    return (
        <TodoListTemplateBlock>
            <TodoList
                title={"할 일 목록"}
                checked={false}
            />
            <TodoList
                title={"완료한 목록"}
                checked={true}
            />
        </TodoListTemplateBlock>
    );
}

export default TodoListTemplate;
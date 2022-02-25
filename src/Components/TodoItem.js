import styled, { css } from 'styled-components';
import { Circle, CheckCircle, Trash2 } from 'react-feather';

const Remove = styled.div`
    display: none;
    margin-left: 8px;
    color: #D1D5DB;
    cursor: pointer;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const Checkbox = styled.div`
    margin-right: 8px; 
    color: #D1D5DB;
    cursor: pointer;

    ${props =>
        props.done &&
        css`
          color: #38d9a9;
        `}
`;

const Text = styled.p`
    margin: 0;
    font-size: 16px;
    color: #202020;

    ${props =>
        props.done &&
        css`
          color: #D1D5DB;
        `}
`;

const TodoItem = ({ id, done, text }) => {
    return (
        <TodoItemBlock>
            <Checkbox done={done}>{ done ? <CheckCircle  size={20}/>:<Circle  size={20} /> }</Checkbox>
            <Text done={done}>{ text }</Text>
            <Remove><Trash2 size={20} /></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;
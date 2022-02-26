import React from 'react';
import styled, { css } from 'styled-components';
import { Circle, CheckCircle, Trash2 } from 'react-feather';
import { useTodoDispatch } from '../TodoContext';

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
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});
    
    return (
        <TodoItemBlock>
            <Checkbox done={done} onClick={onToggle}>{ done ? <CheckCircle  size={20}/>:<Circle  size={20} /> }</Checkbox>
            <Text done={done}>{ text }</Text>
            <Remove onClick={onRemove}><Trash2 size={20} /></Remove>
        </TodoItemBlock>
    );
}

// React.memo() => 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지하게 되어 성능을 최적화 가능
export default React.memo(TodoItem);
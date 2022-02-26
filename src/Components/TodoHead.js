import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.header`
    padding: 36px 24px;
    background-color: #F9FAFB;

    @media screen and (min-width: 512px) {
        div {
            width: 512px;
            margin: 0 auto;
        }
    }

    h1 {
        margin: 0;
        font-size: 36px;
        color: #324552;
    }

    p {
        margin: 0;
        font-size: 14px;
        line-height: 22px;
    }
`;

function TodoHeade () {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const datetring = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'narrow'
    })
    return (
        <TodoHeadBlock>
            <div>
                <h1>{ datetring }</h1>
                <p>할 일 <b>{ undoneTasks.length }</b>개 남음</p>
            </div>
        </TodoHeadBlock>
    );
}

export default TodoHeade;
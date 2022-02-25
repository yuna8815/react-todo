import React from 'react';
import styled from 'styled-components';

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
    return (
        <TodoHeadBlock>
            <div>
                <h1>Mar 15, 2022</h1>
                <p>할 일 <b>2</b>개 남음</p>
            </div>
        </TodoHeadBlock>
    );
}

export default TodoHeade;
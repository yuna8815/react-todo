import { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const TodoInputPositioner = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px;
`;

const TodoInputForm = styled.form`
    @media screen and (min-width: 512px) {
        width: 512px;
        margin: 0 auto;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 8px;
    color: #202020;
    border: solid 1px #EEF6FF;
    border-radius: 4px;
    &::placeholder {
        color: #6B7280;
    }
`;

function TodoInput () {
    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        //  새로고침 방지
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        nextId.current += 1;
    };

    return (
        <TodoInputPositioner>
            <TodoInputForm onSubmit={onSubmit}>
                <Input
                    value={value}
                    autoFocus
                    placeholder="입력 후 Enter를 누르세요 😊"
                    onChange={onChange}
                />
            </TodoInputForm>
        </TodoInputPositioner>
    )
}

export default TodoInput;
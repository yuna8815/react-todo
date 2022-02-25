import styled from 'styled-components';

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
    &::placeholder {color: #6B7280;}
`;

function TodoInput () {
    return (
        <TodoInputPositioner>
            <TodoInputForm>
                <Input placeholder="New Task.." />
            </TodoInputForm>
        </TodoInputPositioner>
    )
}

export default TodoInput;
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    padding-bottom: 80px;
`;

const TodoTemplate = ({ children }) => {
    return <TodoTemplateBlock>{ children }</TodoTemplateBlock>;
};

export default TodoTemplate;
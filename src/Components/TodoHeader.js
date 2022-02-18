import React from 'react';

class TodoHeader extends React.Component {
    render() {
        return (
            <header className="todo-header">
                <h1>March 15, 2022</h1>
                <ul>
                    <li><b>4</b> Incomplete</li>
                    <li><b>2</b> Complete</li>
                </ul>
            </header>
        )
    }
}

export default TodoHeader;
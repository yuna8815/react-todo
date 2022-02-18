import React from "react";

class TodoInput extends React.Component {
    render() {
        return (
            <div className="todo-input">
                <input type="text" placeholder="New Task.." />
            </div>
        )
    }
}

export default TodoInput;
import React, {Component} from 'react';
import '../Style/TodoInput.css'

class TodoInput extends Component {
    render() {
        return (
            <div className="todo-input">
                <div class="input"><input type="text" placeholder="New Task.." /></div>
            </div>
        )
    }
}

export default TodoInput;
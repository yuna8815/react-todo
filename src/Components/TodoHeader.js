import React, {Component} from 'react';
import '../Style/TodoHeader.css'

class TodoHeader extends Component {
    render() {
        const now = new Date();
        const year = now.getFullYear();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[now.getMonth()];
        const date = now.getDate();

        const incomplete = this.props.incomplete;
        const complete = this.props.complete;

        return (
            <header className="todo-header">
                <h1>{month} {date}, {year}</h1>

                <p><b>{incomplete}</b> Incomplete, <b>{complete}</b> Complete</p>
            </header>
        )
    }
}

export default TodoHeader;
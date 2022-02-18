import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <section>
                    <h2>Incomplete</h2>
                    <ul>
                        <li>
                            <input type="checkbox" id="incomplete-lists1"></input>
                            <label for="incomplete-lists1">Incomplete Task Lists!</label>
                        </li>
                        <li>
                            <input type="checkbox" id="incomplete-lists2"></input>
                            <label for="incomplete-lists2">Incomplete Task Lists!</label>
                        </li>
                        <li>
                            <input type="checkbox" id="incomplete-lists3"></input>
                            <label for="incomplete-lists3">Incomplete Task Lists!</label>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Complete</h2>
                    <ul>
                        <li>
                            <input type="checkbox" id="complete-lists1"></input>
                            <label for="complete-lists1">Complete Task Lists!</label>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default TodoList;
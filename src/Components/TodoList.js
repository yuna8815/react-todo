import React, {Component} from 'react';
import '../Style/TodoList.css'

class TodoList extends Component {
    getTodoItems(category) {
        const lists = [];
        category.forEach((data) => {
            if(data.checked) {
                lists.push(
                    <li key={data.id} onChange={function() {
                            this.setState({
                                category: []
                            });
                        }
                    }>
                        <input type="checkbox" id={data.id} checked={data.checked}></input>
                        <label htmlFor={data.id}><del>{data.label}</del></label>
                    </li>
                );
            }
            else {
                lists.push(
                    <li key={data.id}>
                        <input type="checkbox" id={data.id} checked={data.checked}></input>
                        <label htmlFor={data.id}>{data.label}</label>
                    </li>
                );
            }
        });
        return lists;
    };

    render() {
        const incomplete = this.props.incomplete;
        const complete = this.props.complete;

        return (
            <main className="todo-list">
                <section>
                    <h2>Incomplete</h2>
                    <ul>
                        {this.getTodoItems(incomplete)}
                    </ul>
                </section>
        
                <section>
                    <h2>Complete</h2>
                    <ul>
                        {this.getTodoItems(complete)}
                    </ul>
                </section>
            </main>
        )
    }
    
}

export default TodoList;
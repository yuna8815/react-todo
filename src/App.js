import React, {Component} from 'react';

import './App.css';
import TodoHeader from './Components/TodoHeader';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incompleteLists: [
        {id: 0, label: 'Incomplete Task Lists!', checked: false},
        {id: 1, label: 'Incomplete Task Lists!', checked: false},
        {id: 2, label: 'Incomplete Task Lists!', checked: false},
        {id: 3, label: 'Incomplete Task Lists!', checked: false}
      ],
      completeLists: [
        {id: 4, label: 'Complete Task Lists!', checked: true}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <TodoHeader
          incomplete={this.state.incompleteLists.length}
          complete={this.state.completeLists.length}
        />
        <hr />
        <TodoList
          incomplete={this.state.incompleteLists}
          complete={this.state.completeLists}
        />
        <TodoInput />
      </div>
    );
  }
}

export default App;

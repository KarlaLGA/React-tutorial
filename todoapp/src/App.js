import React, { Component} from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'finish tutorial'},
      {id: 2, content: 'have breakfast'}
    ]
  }

  deleteTodo = (id) => {
    const lessTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: lessTodos
    }
    )
  }
  render(){
    return (
      <div className="todoApp container">
        <h1 className="center blue-text">To-do's</h1>
        <Todos todos={ this.state.todos } deleteTodo= { this.deleteTodo}/>
      </div>
    );
  }
}

export default App;

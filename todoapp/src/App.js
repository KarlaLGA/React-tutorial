import React, { Component} from 'react';
import Todos from './Todos';
import AddTodo from './addForm';

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

  addTodo = (todo) => {
    
    let lastidNumber = this.state.todos.length - 1;
    console.log('last position')
    console.log(lastidNumber);
    let lastid = this.state.todos[lastidNumber].id;
    console.log('last id')
    console.log(lastid);
    todo.id = lastid + 1;

    let moreTodos = [...this.state.todos, todo];
    this.setState({
      todos: moreTodos
    })
  }
  render(){
    return (
      <div className="todoApp container">
        <h1 className="center blue-text">To-do's</h1>
        <Todos todos={ this.state.todos } deleteTodo= { this.deleteTodo} />
        <AddTodo addTodo= { this.addTodo } />
      </div>
    );
  }
}

export default App;

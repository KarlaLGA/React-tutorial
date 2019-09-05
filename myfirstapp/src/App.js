import React, { Component} from 'react';
import Musicians from './Musicians'
import './App.css'

class App extends Component {
  state = {
    musicians : [
      {name: 'John Newman', age: 29, genre:'soul', id: 1},
      {name: 'Freddie Mercury', age: 45, genre:'rock', id: 2},
      {name: 'Mana', age: 33, genre: 'pop rock', id:3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React APP!</h1>
        <h2>A list of my favourite </h2>
        <div className="favourite1">
          <h3>Musicians:</h3>
          <Musicians musicians={this.state.musicians} className="App-content"/>
        </div>
      </div>
    );
  }
}

export default App;

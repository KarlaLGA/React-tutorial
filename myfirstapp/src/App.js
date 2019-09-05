import React, { Component} from 'react';
import Musicians from './Musicians'

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
        <h2>Hello and welcome</h2>
        <Musicians musicians={this.state.musicians}/>
  
      </div>
    );
  }
}

export default App;

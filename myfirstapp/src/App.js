import React, { Component} from 'react';
import Musicians from './Musicians';
import AddMusician from './AddMusician';
import './App.css';

class App extends Component {
  state = {
    musicians : [
      {name: 'John Newman', age: 29, genre:'soul', id: 1},
      {name: 'Freddie Mercury', age: 45, genre:'rock', id: 2},
      {name: 'Mana', age: 33, genre: 'pop rock', id:3},
    ]
  }

  // To connect a function that changes the state inside a nested component

  addMusician = (musician) => {
    //create an arrow function that receives a parameter
    console.log(musician);

    let lastidNumber = this.state.musicians.length - 1;
    console.log('last position')
    console.log(lastidNumber);
    let lastid = this.state.musicians[lastidNumber].id;
    console.log('last id')
    console.log(lastid);
    musician.id = lastid + 1;
    //create an id for the new object

    let moreMusicians =[...this.state.musicians, musician]
    //since we can't alter the state, whe need to create a new version of it
    //we do this by creating a new array based on the state array and the parameter
    this.setState({
      musicians: moreMusicians
      //now we make the value of the state array the same as the new array
    })
  }

  deleteMusician = (id) => {
    console.log(id);
    let lessMusicians = this.state.musicians.filter(musician => {
      return musician.id !== id;
    });
    this.setState ({
      musicians: lessMusicians
    })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  //prevProps shows us the previous props the component had before being updated
  //prevState shows us the previous state of the component
  //this method is a great way to compare what we had before with what we have now

  render() {
    return (
      <div className="App">
        <h1>My first React APP!</h1>
        <h2>A list of my favourite </h2>
        <div className="favourite1">
          <h3>Musicians:</h3>
          <Musicians deleteMusician={this.deleteMusician} musicians= { this.state.musicians } className="App-content"/>
          <div className="form">
            <p>Add a musician:</p>
            <AddMusician addMusician= { this.addMusician } />
            {/* Add a prop to the component which is equal to the function we created */}
            {/* to connect this function to the component, check the component AddMusician */}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

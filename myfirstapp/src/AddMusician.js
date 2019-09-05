import React, {Component} from 'react'

class AddMusician extends Component{
    state = {
        name: null,
        age: null,
        genre: null
    }
    whenChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    whenSubmit = (e) => {
        e.preventDefault();
        //to connect the function from the root component
        //refer to the props we received from the root component and pass the state as a parameter
        this.props.addMusician(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.whenSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.whenChange}/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.whenChange}/>
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" id="genre" onChange={this.whenChange}/>
                    <button>Add Musician</button>
                </form>
            </div>
        )
    }
}

export default AddMusician
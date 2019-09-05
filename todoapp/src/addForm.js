import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    whenChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    whenSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.whenSubmit }>
                    <label>Add new todo:</label>
                    <input type="text" onChange={ this.whenChange } value={ this.state.content }/>
                </form>
            </div>
        )
    }
}

export default AddTodo
import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={ todo.id }>
                    <span>{todo.content}</span>
                    <button className="btn waves-effect waves-light" onClick={() => {deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
        })

    ) : (
        <p className="center">You have no todo's left</p>
    );
    return (
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default Todos;
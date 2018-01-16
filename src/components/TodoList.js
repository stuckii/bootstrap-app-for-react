import React, { Component } from 'react';

class TodoList extends Component {
    state = {  }
    render() {
        return (
            <div className="todo-list">
                <ul>
                    {
                        this.props.todos.map(function(todo, index) {
                            return <li key={index}>{todo}</li>
                        })
                    }
                </ul>
            </div>            
        );
    }
}

export default TodoList;
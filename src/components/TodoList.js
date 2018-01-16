import React, { Component } from 'react';

class TodoList extends Component {
    state = {  }
    render() {
        return (
            <div class="todo-list">
                <ul>
                    {
                        this.props.todos.map(function(todo, index) {
                            return <li>{todo}</li>
                        })
                    }
                </ul>
            </div>            
        );
    }
}

export default TodoList;
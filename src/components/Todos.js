import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [1, 2, 3]
        };
    }
    render() {
        return (
            <div className="todos">
                <TodoInput />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default Todos;
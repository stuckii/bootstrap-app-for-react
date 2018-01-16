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

    onSave = function() {
        this.setState({
            todos: this.state.todos.concat([9])
        });
    }

    render() {
        return (
            <div className="todos">
                <TodoInput
                    onSave={this.onSave.bind(this)}
                />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default Todos;
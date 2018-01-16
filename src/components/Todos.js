import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: []
        };
    }

    onChange = function(event) {
        this.setState({
            todo: event.target.value
        });
    }

    // onChange = (event) => {
    //     this.setState({
    //         todo: event.target.value
    //     });
    // }

    onSave = function(event) {
        const todo = this.state.todo,
            todos = this.state.todos;

        this.setState({
            todo: '',
            todos: todos.concat(todo)
        });
    }

    onDelete = function(index) {
        var todos = this.state.todos;
        
        todos.splice(index, 1);

        this.setState({
            todos: todos
        });
    }

    render() {
        return (
            <div className="todos">
                <TodoInput
                    todo={this.state.todo}
                    onChange={this.onChange.bind(this)}
                    onSave={this.onSave.bind(this)}
                />
                <TodoList
                    todos={this.state.todos}
                    onDelete={this.onDelete.bind(this)}
                />
            </div>
        );
    }
}

export default Todos;
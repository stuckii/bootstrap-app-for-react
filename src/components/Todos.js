import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todos extends Component {
    state = {  }
    render() {
        return (
            <div className="todos">
                <TodoInput />
                <TodoList
                    todos={[1, 2, 3]}
                />
            </div>
        );
    }
}

export default Todos;
import React, { Component } from 'react';

class TodoInput extends Component {
    state = {  }
    render() {
        return (
            <div className="todo-input">
                <input type="text"></input>
                <button type="button">
                    <span>save</span>
                </button>
            </div>            
        );
    }
}

export default TodoInput;
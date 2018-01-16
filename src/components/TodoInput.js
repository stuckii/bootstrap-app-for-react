import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div className="todo-input">
                <input type="text"
                    onChange={this.props.onChange}
                    value={this.props.todo}>
                </input>
                <button type="button"
                    onClick={this.props.onSave}>
                    <span>save</span>
                </button>
            </div>            
        );
    }
}

export default TodoInput;
import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-list">
                <ul>
                    {
                        // this.props.todos.map(function(todo, index) {
                        //     return <li key={index}>
                        //     <span onClick={this.props.onDelete}>[x] </span>
                        //     {todo}</li>
                        // })

                        this.props.todos.map((todo, index) => {
                            return <li key={index}>
                            <span onClick={() => this.props.onDelete.call(this, index)}>[x] </span>
                            {todo}</li>
                        })
                    }
                </ul>
            </div>            
        );
    }
}

export default TodoList;
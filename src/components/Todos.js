import React, { Component } from 'react';

class Todos extends Component {
    state = {  }
    render() {
        return (
            <div className="todos">
                <div className="todo-input">
                    <input type="text"></input>
                    <button type="button">
                        <span>save</span>
                    </button>
                </div>
                <div class="todo-list">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todos;
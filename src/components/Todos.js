import React, { Component } from 'react';

class Todos extends Component {
    state = {  }
    render() {
        return (
            <div className="Todos">
                <div className="TodoInput">
                    <input type="text"></input>
                    <button type="button">
                        <span>save</span>
                    </button>
                </div>
                <div class="TodoList">
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
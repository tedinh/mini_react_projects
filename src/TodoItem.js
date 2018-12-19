import React, { Component } from "react";
import ReactDOM from 'react-dom';

class TodoItem extends Component {
    render() {
        return(
            <div className="todo-item">
                <input type="checkbox" />
                <p>Placeholder Text Here</p>
            </div>
        )
    }
}

export default TodoItem;
import React, { Component } from "react";
import TodoItem from './TodoItem';

class App extends Component {
  render() {
    return (
      <div className="todo-list"> 
        <TodoItem />
      </div>
    )
  }
}

export default App;

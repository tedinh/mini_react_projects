import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../home';
import Todo from '../todo/Todo'
import Meme from '../meme/Meme'

class Navbar extends Component {
  render(){
    return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">ToDo List</Link>
            </li>
            <li>
              <Link to="/meme">Random Meme Generator</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/meme" component={Meme} />
        </div>
      </Router>
    )
  }
}

export default Navbar;
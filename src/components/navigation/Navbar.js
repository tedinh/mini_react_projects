import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../home';
import Todo from '../todo/Todo';
import Meme from '../meme/Meme';
import Youtube from '../youtube/Youtube';
import Song from '../songPlayer/Song';
import Chatty from '../chatkit/Chatkit'


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
              <Link to="/chatty">Chatty</Link>
            </li>
            <li>
              <Link to="/meme">Random Meme Generator</Link>
            </li>
            <li>
              <Link to="/song-player">Song Player (Redux)</Link>
            </li>
            <li>
              <Link to="/todo">ToDo List</Link>
            </li>
            <li>
              <Link to="/youtube-clone">Youtube Clone</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/chatty" component={Chatty} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/meme" component={Meme} />
          <Route exact path="/youtube-clone" component={Youtube} />
          <Route exact path="/song-player" component={Song} />
        </div>
      </Router>
    )
  }
}

export default Navbar;
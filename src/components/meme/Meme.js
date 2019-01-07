import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class Meme extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default Meme;
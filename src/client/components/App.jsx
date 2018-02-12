import React, { Component } from 'react';
import Song from './song.jsx';
import Header from './Header.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Song />
        </div>
      </div>
      );
    }
}
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

export default App

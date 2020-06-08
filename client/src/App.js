import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';
import { Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


export class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </div>
    )
  }
}

export default App

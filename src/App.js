import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './components/list.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Route path="/" component={List} />
          <Route path="/users/:id" component={List} />
          <Route path="/users/:id/albums/:id" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;

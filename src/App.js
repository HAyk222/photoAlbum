import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Users from './components/users.js';
import Albums from './components/albums.js';
import Images from './components/images.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Route 
            path="/" 
            component={Users} />
          <Route 
            path="/users/:id" 
            component={Albums} />
          <Route 
            path="/users/:id/albums/:id" 
            component={Images} />
        </div>
      </Router>
    );
  }
}

export default App;

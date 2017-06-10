import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import TextField from './components/TextField'

class App extends Component {
  render() {
    return (
      <div className="Shibusa-App">
        <div className="Shibusa-Row">
          <Button>
            Click me!
          </Button>
          <Button type="info">
            Information
          </Button>
          <Button type="success">
            Success
          </Button>
          <Button type="danger">
            Danger
          </Button>
        </div>
        <div className="Shibusa-Row">
          <TextField placeholder="Enter some text here..."/>
        </div>
      </div>
    );
  }
}

export default App;

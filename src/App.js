import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import TextField from './components/TextField'
import TextArea from './components/TextArea'
import Tab from './components/Tab'
import TabList from './components/TabList'

class App extends Component {
  render() {
    return (
      <div className="Shibusa-App">
        <div className="Shibusa-Row">
          <Button>
           Default
          </Button>
          <Button disabled type="info">
            Disabled
          </Button>
          <Button type="action">
            Action
          </Button>
          <Button type="info">
            Information
          </Button>
          <Button type="success">
            Success
          </Button>
          <Button type="warning">
            Warning
          </Button>
          <Button type="danger">
            Danger
          </Button>
        </div>
        <div className="Shibusa-Row">
          <TextField placeholder="Enter some text here..."/>
        </div>
        <div className="Shibusa-Row">
          <TextArea placeholder="Enter some text here..."/>
        </div>
        <div className="Shibusa-Row">
          <div>
            <h1>Example Heading</h1>
            <h2>Example Heading</h2>
            <h3>Example Heading</h3>
            <h4>Example Heading</h4>
            <h5>Example Heading</h5>
            <h6>Example Heading</h6>
          </div>
        </div>
        <div className="Shibusa-Row">
          <TabList>
            <Tab>Domains</Tab>
            <Tab>Floating IPs</Tab>
            <Tab selected>Load Balancers</Tab>
            <Tab>Firewalls</Tab>
            <Tab>PTR records</Tab>
          </TabList>
        </div>
      </div>
    );
  }
}

export default App;

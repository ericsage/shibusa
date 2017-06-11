import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import TextField from './components/TextField'
import TextArea from './components/TextArea'
import TextBox from './components/TextBox'
import Tab from './components/Tab'
import TabList from './components/TabList'
import { Table, TableHead, TableHeader, TableBody, TableRow, TableData } from './components/Table'

const Header = ({title}) => (
  <div className="Shibusa-Header">
    <h2>{title}</h2>
    <hr/>
  </div>
)

const Row = ({children}) => (
  <div className="Shibusa-Row">
    {children}
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="Shibusa-App">
        <div className="Shibusa-Intro">
          <h1>SHIBUSA</h1>
          <h2>A React Component Library</h2>
        </div>
        <Header title="Buttons"/>
        <Row>
          <Button> Default </Button>
          <Button disabled type="info"> Disabled </Button>
          <Button type="action"> Action </Button>
          <Button type="info"> Information </Button>
          <Button type="success"> Success </Button>
          <Button type="warning"> Warning </Button>
          <Button type="danger"> Danger </Button>
        </Row>
        <Row>
          <Button inverted> Default </Button>
          <Button inverted disabled type="info"> Disabled </Button>
          <Button inverted type="action"> Action </Button>
          <Button inverted type="info"> Information </Button>
          <Button inverted type="success"> Success </Button>
          <Button inverted type="warning"> Warning </Button>
          <Button inverted type="danger"> Danger </Button>
        </Row>
        <Header title="TextField"/>
        <Row>
          <TextField placeholder="Enter some text here..."/>
        </Row>
        <Header title="TextArea"/>
        <Row>
          <TextArea placeholder="Enter some text here..."/>
        </Row>
        <Header title="TextBox"/>
        <div style={{margin: "0 20% 0 20%"}}>
          <TextBox>
            <p>This is an example of a text box. It contains important information.</p>
          </TextBox>
          <TextBox type="action">
            <p>This is an example of an action box. It contains important information.</p>
          </TextBox>
          <TextBox type="info">
            <p>This is an example of an info box. It contains important information.</p>
          </TextBox>

          <TextBox type="success">
            <p>This is an example of an success box. It contains important information.</p>
          </TextBox>
          <TextBox type="warning">
            <p>This is an example of an warning box. It contains important information.</p>
          </TextBox>
          <TextBox type="danger">
            <p>This is an example of an danger box. It contains important information.</p>
          </TextBox>
        </div>
        <Header title="Headings"/>
        <Row>
          <div style={{width: "100%"}}>
            <h1>Example H1 Heading</h1>
            <h2>Example H2 Heading</h2>
            <h3>Example H3 Heading</h3>
            <h4>Example H4 Heading</h4>
            <h5>Example H5 Heading</h5>
            <h6>Example H6 Heading</h6>
          </div>
        </Row>
        <Header title="TabList"/>
        <Row>
          <TabList>
            <Tab>Domains</Tab>
            <Tab>Floating IPs</Tab>
            <Tab selected>Load Balancers</Tab>
            <Tab>Firewalls</Tab>
            <Tab>PTR records</Tab>
          </TabList>
        </Row>
        <Header title="Table"/>
        <Row>
          <Table>
            <TableHead>
              <TableHeader>Type</TableHeader>
              <TableHeader>Hostname</TableHeader>
              <TableHeader>Value</TableHeader>
              <TableHeader>TTL (seconds)</TableHeader>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData>NS</TableData>
                <TableData>ericsage.io</TableData>
                <TableData>ns1.digitalocean.com.</TableData>
                <TableData>1800</TableData>
              </TableRow>
              <TableRow>
                <TableData>NS</TableData>
                <TableData>ericsage.io</TableData>
                <TableData>ns2.digitalocean.com.</TableData>
                <TableData>1800</TableData>
              </TableRow>
              <TableRow>
                <TableData>NS</TableData>
                <TableData>ericsage.io</TableData>
                <TableData>ns3.digitalocean.com.</TableData>
                <TableData>1800</TableData>
              </TableRow>

            </TableBody>
          </Table>
        </Row>
      </div>
    );
  }
}

export default App;

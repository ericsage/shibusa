import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import TextField from './components/TextField'
import TextArea from './components/TextArea'
import TextBox from './components/TextBox'
import Tab from './components/Tab'
import TabBar from './components/TabBar'
import NavBar from './components/NavBar'
import { Table, TableHead, TableHeader, TableBody, TableRow, TableData } from './components/Table'
import { Select, Option } from './components/Select'
import Snippet from './components/Snippet'

const Header = ({title, text, code}) => (
  <div className="Shibusa-Header">
    <h2>{title}</h2>
    <hr/>
    <p>{text}</p>
  <Snippet>{code}</Snippet>
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
        <Header
          title="Buttons"
          text={"Button functions just like a normal <button> except that a type prop may be passed a string value of action, info, success, warning, or danger. Adding disabled as a prop will also cause the button to grey itself out. Generally, there should only be one button of type action per page or component to draw the users eye."}
          code={"<Button> Default </Button>"}
        />
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
        <Header
           title="TabBar and NavBar"
           text={"TabBar and NavBar both use the Tab component as children, but are used in different contexts. A NavBar should be used as a way to switch entire pages, wheras a TabBar is usefull to tab between different views of a component. Add selected as a prop to a Tab will make it visually appear as the selected tab."}
           code={"<TabBar><Tab selected>Load Balancers</Tab></TabBar>"}
        />
        <Row>
          <TabBar>
            <Tab>Domains</Tab>
            <Tab>Floating IPs</Tab>
            <Tab selected>Load Balancers</Tab>
            <Tab>Firewalls</Tab>
            <Tab>PTR records</Tab>
          </TabBar>
        </Row>
        <Row>
          <NavBar>
            <Tab>Domains</Tab>
            <Tab>Floating IPs</Tab>
            <Tab selected>Load Balancers</Tab>
            <Tab>Firewalls</Tab>
            <Tab>PTR records</Tab>
          </NavBar>
        </Row>

        <Header
          title="TextField"
          text={"TextField functions just like <input type='text'/>"}
          code={"<TextField placeholder='Enter some text here...'/>"}
        />
        <Row>
          <TextField placeholder="Enter some text here..."/>
        </Row>
        <Header
          title="Select"
          text={"Select and Option function just like <select> and <option>. When there is no suitable default value, add a selected disabled top level option. This will look like a title for the options to select from. The actual selection menu is styled by the browser."}
          code={"<Select><Option disabled selected disabled value='newcar'>New Car</Option>"}
        />
        <Row>
          <Select>
            <Option disabled selected value="newcar">New Car</Option>
            <Option value="volvo">Volvo</Option>
            <Option value="saab">Saab</Option>
            <Option value="mercedes">Mercedes</Option>
            <Option value="audi">Audi</Option>
          </Select>
        </Row>
        <Header
          title="TextArea"
          text={"TextArea functions just like <texarea/>"}
          code={"<TextArea placeholder='Enter some text here...'/>"}
        />
        <Row>
          <TextArea placeholder="Enter some text here..."/>
        </Row>
        <Header
          title="TextBox"
          text={"TextBox should be used to make important information stand out to the user. It has a type prop that accepts the same values as the type prop on Button."}
          code={"<TextBox type='info'><p>This is an example of an info box. It contains important information.</p></TextBox>"}
        />
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
        <Header
          title="Table"
          text={"Table contains many subcomponents, most of which funtion like their html counterparts. Table should be used as a lightweight Table, if you need filtering, sorting, or resizable columns, you'll probably require a third party solution, or will need to build your own."}
          code={"<Table><TableHead><TableHeader>Header</TableHeader></TableHead><TableBody><TableRow><TableData>Data</TableData></TableRow></TableBody></Table>"}
        />
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

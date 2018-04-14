import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from './components/header'
import './App.css';
import Content from "./components/content";

class App extends Component {
  render() {
    return (
      <Container id="layout">
            <Header />
            <Content/>
      </Container>
    );
  }
}

export default App;

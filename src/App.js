import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from './components/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container id="layout">
            <Header />
      </Container>
    );
  }
}

export default App;

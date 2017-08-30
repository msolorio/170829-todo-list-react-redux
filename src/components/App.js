import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import List from './List';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <List/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(App);

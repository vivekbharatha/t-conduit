'use strict';
import Header from './Header';
import Home from './Home';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

const mapStateToProps = state => ({appName: state.appName});

class App extends React.Component {
  render() {
    return (
      <div >
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);

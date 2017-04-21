import Header from './Header';
import Home from './Home';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({appName: state.appName});

class App extends React.Component {
  render() {
    return (
      <div >
        <Header appName={this.props.appName} /> {/*common header*/}
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);

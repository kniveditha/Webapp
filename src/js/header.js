import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import './css/App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <h1 className="App-title">CodeSpecJS</h1> 
            <h4 className="App-intro">
                Define all your Test Suits and Test Cases with ease.
            </h4>
        </header>
    );
  }
}

export default Header;

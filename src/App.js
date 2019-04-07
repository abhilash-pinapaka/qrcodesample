import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QRCodeGenerator from './components/qrcodecomponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <QRCodeGenerator />
        </header>
      </div>
    );
  }
}

export default App;

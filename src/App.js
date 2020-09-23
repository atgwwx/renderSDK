import React from 'react';
import Container from './components/Container'
import SDK from  './renderSDK'
import configData from './config/data'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SDK {...configData}/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Quote from './components/Quote'

import './App.css';
function App() {
  function getStyle() {
    return {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      msTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)"
    }
  }
  return (
    <div className="App" style={getStyle()}>
      <Quote />
    </div>
  );
}

export default App;

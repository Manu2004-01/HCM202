import React, { useState } from 'react';
import './App.css';
import DecisionTree from './components/DecisionTree';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DecisionTree />
    </div>
  );
}

export default App;


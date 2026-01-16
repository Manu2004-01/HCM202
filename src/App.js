import React, { useState } from 'react';
import './App.css';
import DecisionTree from './components/DecisionTree';
import Header from './components/Header';
import TheoryContent from './components/TheoryContent';

function App() {
  const [currentMode, setCurrentMode] = useState('game'); // 'game' or 'theory'

  const handleSwitchToGame = () => {
    setCurrentMode('game');
  };

  const handleSwitchToTheory = () => {
    setCurrentMode('theory');
  };

  return (
    <div className="App">
      <Header
        currentMode={currentMode}
        onSwitchToGame={handleSwitchToGame}
        onSwitchToTheory={handleSwitchToTheory}
      />
      {currentMode === 'theory' ? (
        <TheoryContent />
      ) : (
        <DecisionTree />
      )}
    </div>
  );
}

export default App;


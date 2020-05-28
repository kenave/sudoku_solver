import React from 'react';
import './App.css';
import Sudoku from './components/Sudoku';

function App() {
  return (
    <div className="App">
      <h2>Sudoku Solver</h2>
      <h3>Stuck on your sudoku? Enter what you've got so far.</h3>
      <Sudoku/>
    </div>
  );
}

export default App;

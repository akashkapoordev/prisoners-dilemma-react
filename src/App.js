// src/App.js

import React, { useState } from 'react';
import GameExplanation from './components/GameExplanation';
import StrategySelection from './components/StrategySelection';
import NumberOfRounds from './components/NumberOfRounds';
import Game from './components/Game';
import ResultsVisualization from './components/ResultsVisualization';
import { strategies } from './strategies';
import './App.css';

function App() {
  const [strategy1, setStrategy1] = useState('Always Cooperate');
  const [strategy2, setStrategy2] = useState('Always Defect');
  const [rounds, setRounds] = useState(100);
  const [gameResult, setGameResult] = useState(null);

  const handleGameEnd = (result) => {
    setGameResult(result);
  };

  return (
    <div className="App">
      <h1>Prisoner's Dilemma Simulation</h1>
      <GameExplanation />
      <div className="strategy-selection">
        <StrategySelection
          strategies={strategies}
          player="Player 1"
          onSelect={setStrategy1}
        />
        <StrategySelection
          strategies={strategies}
          player="Player 2"
          onSelect={setStrategy2}
        />
      </div>
      <NumberOfRounds onSetRounds={setRounds} />
      <Game
        strategy1={strategy1}
        strategy2={strategy2}
        rounds={rounds}
        onGameEnd={handleGameEnd}
      />
      {gameResult && (
        <ResultsVisualization
          history1={gameResult.history1}
          history2={gameResult.history2}
          score1={gameResult.score1}
          score2={gameResult.score2}
          strategy1={strategy1}
          strategy2={strategy2}
        />
      )}
    </div>
  );
}

export default App;

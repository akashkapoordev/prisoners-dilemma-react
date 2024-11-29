// src/components/Game.js

import React, { useState } from 'react';
import { strategies } from '../strategies';

const payoffMatrix = {
  'CC': [3, 3],
  'CD': [0, 5],
  'DC': [5, 0],
  'DD': [1, 1],
};

const Game = ({ strategy1, strategy2, rounds, onGameEnd }) => {
  const [gamePlayed, setGamePlayed] = useState(false);

  const playGame = () => {
    let history1 = [];
    let history2 = [];
    let score1 = 0;
    let score2 = 0;

    for (let i = 0; i < rounds; i++) {
      const move1 = strategies[strategy1].func(history1, history2);
      const move2 = strategies[strategy2].func(history2, history1);

      history1.push(move1);
      history2.push(move2);

      const key = move1 + move2;
      score1 += payoffMatrix[key][0];
      score2 += payoffMatrix[key][1];
    }

    onGameEnd({ history1, history2, score1, score2 });
    setGamePlayed(true);
  };

  return (
    <div>
      <button onClick={playGame}>Start Game</button>
      {gamePlayed && <p>Game completed. See results below.</p>}
    </div>
  );
};

export default Game;

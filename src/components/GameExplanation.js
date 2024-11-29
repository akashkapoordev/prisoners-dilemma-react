// src/components/GameExplanation.js

import React from 'react';
import '../Styles/GameExplanation.css'; // Import if using a separate CSS file

const GameExplanation = () => (
  <div className="game-explanation">
    <h2 className="game-title">Prisoner's Dilemma Game</h2>
    <p className="game-description">
      The Prisoner's Dilemma is a game that shows why two rational individuals might not cooperate, even if it seems in their best interest.
    </p>
    <h3 className="rules-title">Game Rules:</h3>
    <ul className="rules-list">
      <li>Each player chooses to Cooperate (C) or Defect (D).</li>
      <li>Payoffs are as follows:</li>
      <ul className="payoffs-list">
        <li>Both Cooperate: 3 points each.</li>
        <li>One Cooperates, one Defects: Defector gets 5 points, Cooperator gets 0.</li>
        <li>Both Defect: 1 point each.</li>
      </ul>
    </ul>
  </div>
);

export default GameExplanation;

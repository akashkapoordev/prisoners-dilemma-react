// src/components/StrategySelection.js

import React from 'react';

const StrategySelection = ({ strategies, player, onSelect }) => (
  <div>
    <label htmlFor={`strategy-${player}`}>{player} Strategy Selection</label>
    <select
      id={`strategy-${player}`}
      onChange={(e) => onSelect(e.target.value)}
    >
      {Object.keys(strategies).map((strategy) => (
        <option key={strategy} value={strategy}>
          {strategy}
        </option>
      ))}
    </select>
  </div>
);

export default StrategySelection;

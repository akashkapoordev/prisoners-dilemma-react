// src/components/NumberOfRounds.js

import React, { useState } from 'react';

const NumberOfRounds = ({ onSetRounds }) => {
  const [rounds, setRounds] = useState(100);

  const handleChange = (e) => {
    const value = e.target.value;
    setRounds(value);
    onSetRounds(Number(value));
  };

  const handleRandomize = () => {
    const randomRounds = Math.floor(Math.random() * 901) + 100; // Random between 100 and 1000
    setRounds(randomRounds);
    onSetRounds(randomRounds);
  };

  return (
 <div>
      <label htmlFor="rounds-input">Set Number of Rounds</label>
      <input
        id="rounds-input"
        type="number"
        value={rounds}
        onChange={handleChange}
        min="1"
      />
      <button onClick={handleRandomize}>Random Rounds (100-1000)</button>
    </div>
  );
};

export default NumberOfRounds;

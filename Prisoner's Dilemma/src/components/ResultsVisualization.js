// src/components/ResultsVisualization.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

// Import and register components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultsVisualization = ({ history1, history2, score1, score2, strategy1, strategy2 }) => {
  const cooperations1 = history1.filter((move) => move === 'C').length;
  const defections1 = history1.filter((move) => move === 'D').length;
  const cooperations2 = history2.filter((move) => move === 'C').length;
  const defections2 = history2.filter((move) => move === 'D').length;

// src/components/ResultsVisualization.js

const dataMoves = {
    labels: ['Cooperations', 'Defections'],
    datasets: [
      {
        label: strategy1,
        data: [cooperations1, defections1],
        backgroundColor: '#4A90E2', // Bright Blue
      },
      {
        label: strategy2,
        data: [cooperations2, defections2],
        backgroundColor: '#9013FE', // Bright Purple
      },
    ],
  };
  
  const dataScores = {
    labels: ['Total Score'],
    datasets: [
      {
        label: strategy1,
        data: [score1],
        backgroundColor: '#4A90E2',
      },
      {
        label: strategy2,
        data: [score2],
        backgroundColor: '#9013FE',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: false,
        text: 'Game Results',
      },
    },
  };

  return (
    <div className="results-visualization">
    <h3>Results Visualization</h3>
    <div className="chart-container">
      <h4>Cooperations vs Defections</h4>
      <Bar data={dataMoves} options={options} />
    </div>
    <div className="chart-container">
      <h4>Total Scores</h4>
      <Bar data={dataScores} options={options} />
    </div>
    <div className="final-scores">
      <h4>Final Scores</h4>
      <p>{strategy1}: {score1} points</p>
      <p>{strategy2}: {score2} points</p>
    </div>
  </div>
  );
};

export default ResultsVisualization;

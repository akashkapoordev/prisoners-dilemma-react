// src/strategies.js

export const strategies = {
    'Always Cooperate': {
      name: 'Always Cooperate',
      func: () => 'C',
    },
    'Always Defect': {
      name: 'Always Defect',
      func: () => 'D',
    },
    'Tit for Tat': {
      name: 'Tit for Tat',
      func: (history, opponentHistory) => {
        if (opponentHistory.length === 0) return 'C';
        return opponentHistory[opponentHistory.length - 1];
      },
    },
    'Grim Trigger': {
      name: 'Grim Trigger',
      func: (history, opponentHistory) => {
        if (opponentHistory.includes('D')) return 'D';
        else return 'C';
      },
    },
    'Random': {
      name: 'Random',
      func: () => (Math.random() < 0.5 ? 'C' : 'D'),
    },
  };
  
import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState([
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
    { space: 9, content: '' },
  ]);

  function checkWinner() {
    if (
      board[0].content === board[1].content &&
      board[1].content === board[2].content &&
      board[2].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[3].content === board[4].content &&
      board[4].content === board[5].content &&
      board[5].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[6].content === board[7].content &&
      board[7].content === board[8].content &&
      board[8].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[0].content === board[4].content &&
      board[4].content === board[8].content &&
      board[8].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[2].content === board[4].content &&
      board[4].content === board[6].content &&
      board[6].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[3].content === board[4].content &&
      board[4].content === board[5].content &&
      board[5].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[0].content === board[3].content &&
      board[3].content === board[6].content &&
      board[6].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[1].content === board[4].content &&
      board[4].content === board[7].content &&
      board[7].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
    if (
      board[2].content === board[5].content &&
      board[5].content === board[8].content &&
      board[8].content !== ''
    ) {
      setActive(false);
      setGameMessage('You Win!');
    }
  }
  if (active) {
    checkWinner();
  }

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
        board,
        setBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

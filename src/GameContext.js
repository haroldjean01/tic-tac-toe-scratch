import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [gameMessage, setGameMessage] = useState();
  return (
    <GameProvider.Provider value={{ currentPlayer, setCurrentPlayer, gameMessage, setGameMessage }}>
      {children}
    </GameProvider.Provider>
  );
};

export { GameContext, GameProvider };

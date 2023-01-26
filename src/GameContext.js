import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [gameMessage, setGameMessage] = useState();
  const [active, setActive] = useState();
  return (
    <GameProvider.Provider
      value={{ currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}
    >
      {children}
    </GameProvider.Provider>
  );
};

export { GameContext, GameProvider };

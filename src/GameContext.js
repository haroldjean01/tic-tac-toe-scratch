import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [gameMessage, setGameMessage] = useState();
  const [active, setActive] = useState();
  return (
    <GameContext.Provider
      value={{ currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

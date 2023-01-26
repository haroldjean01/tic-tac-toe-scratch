import React, { createContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  return <GameProvider>{children}</GameProvider>;
};

export { GameContext, GameProvider };

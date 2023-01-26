import React, { createContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  return <GameProvider.Provider>{children}</GameProvider.Provider>;
};

export { GameContext, GameProvider };

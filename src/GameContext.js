import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState();
  const [active, setActive] = useState();
  const [value, setValue] = useState(null);

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
        value,
        setValue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

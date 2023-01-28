import React, { useContext } from 'react';
import { GameContext } from '../../GameContext.js';
import Box from '../Box.js';
import './Board.css';

export default function Board() {
  const { board, gameMessage } = useContext(GameContext);
  return (
    <>
      <h1>{gameMessage}</h1>
      <div className="board-row">
        {board.map((gameBoard) => (
          <Box key={gameBoard.space} content={gameBoard.content} space={gameBoard.space} />
        ))}
      </div>
    </>
  );
}

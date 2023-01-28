import React, { useContext } from 'react';
import { GameContext } from '../../GameContext.js';
import Box from '../Box.js';
import './Board.css';

export default function Board() {
  const { board, gameMessage, currentPlayer } = useContext(GameContext);

  return (
    <>
      <h2>{gameMessage}</h2>
      <h2> {currentPlayer}&apos;s turn</h2>
      <div className="board-row">
        {board.map((gameBoard) => (
          <Box key={gameBoard.space} content={gameBoard.content} space={gameBoard.space} />
        ))}
      </div>
    </>
  );
}

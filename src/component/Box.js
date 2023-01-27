import React from 'react';
import './Box/Box.css';
import { GameContext } from '../GameContext.js';
import { useContext } from 'react';

export default function Box({ content }) {
  function onBoxClick() {
    // if (currentPlayer === 'X') {
    //   console.log(board.space);
    //   setBoard('X');
    //   setCurrentPlayer('O');
    // } else {
    //   setBoard.context('O');
    //   setCurrentPlayer('X');
    // }
  }
  return (
    <>
      <div>
        <button className="box" onClick={onBoxClick}>
          {content}
        </button>
      </div>
    </>
  );
}

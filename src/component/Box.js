import React from 'react';
import './Box/Box.css';
import { GameContext } from '../GameContext.js';
import { useContext } from 'react';

export default function Box({ content, space }) {
  const { setBoard, currentPlayer, setCurrentPlayer } = useContext(GameContext);

  function onBoxClick() {
    setBoard((currentBoard) => {
      // always need to return a NEW array
      // .map returns a new array
      //  map over the currentBoard (currentBoard.map(box=>{...}))
      //  if the box.space === space, then update the content
      //   else just return the current box
      return currentBoard.map((box) => {
        if (box.space === space) {
          return { space: box.space, content: currentPlayer };
        } else {
          return { ...box };
        }
      });
    });

    if (currentPlayer === 'O') {
      setCurrentPlayer('X');
    } else {
      setCurrentPlayer('O');
    }
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

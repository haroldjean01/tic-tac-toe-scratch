import React from 'react';
import './Box/Box.css';

export default function Box({ value, onBoxClick }) {
  return (
    <>
      <div className="board-row">
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
      </div>
      <div className="board-row">
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
      </div>
      <div className="board-row">
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
      </div>
    </>
  );
}

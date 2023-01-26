import React from 'react';
import './Box/Box.css';

export default function Box({ value, onBoxClick }) {
  return (
    <>
      <div>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        {/* <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>

        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>

        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button> */}
      </div>
    </>
  );
}

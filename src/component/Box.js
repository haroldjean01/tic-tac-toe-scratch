import React from 'react';
import './Box/Box.css';
import { GameContext } from '../GameContext.js';
import { useContext } from 'react';

export default function Box() {
  const { value, setValue } = useContext(GameContext);
  function onBoxClick() {
    setValue('X');
  }
  return (
    <>
      <div>
        <button className="box" onClick={onBoxClick}>
          {value}
        </button>
      </div>
    </>
  );
}

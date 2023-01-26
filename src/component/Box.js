import React from 'react';
import './Box/Box.css';

export default function Box({ value, onBoxClick }) {
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}

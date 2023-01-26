import React from 'react';

export default function Square({ value, onBoxClick }) {
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}

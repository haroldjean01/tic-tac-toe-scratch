import React from 'react';

export default function Box({ value, onBoxClick }) {
  return (
    <button className="square" onClick={onBoxClick}>
      {value}
    </button>
  );
}

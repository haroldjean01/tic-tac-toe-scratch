import React from 'react';

export default function Box({ value, onBoxClick }) {
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}

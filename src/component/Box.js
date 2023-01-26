import React from 'react';
import './Box/Box.css';
import { useState } from 'react';

export default function Box() {
  const [value, setValue] = useState(null);

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

import React from 'react';
import Box from '../Box.js';
import './Board.css';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Box value="1" />
        <Box value="2" />
        <Box value="3" />
        <Box value="4" />
        <Box value="5" />
        <Box value="6" />
        <Box value="7" />
        <Box value="8" />
        <Box value="9" />
      </div>
    </>
  );
}

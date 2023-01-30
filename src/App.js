import './App.css';
import Board from './component/Board/Board.js';
import { GameContext } from './GameContext.js';
import { useContext } from 'react';
// import Box from './component/Box.js';
function App() {
  const { setBoard, setActive, setGameMessage, setCurrentPlayer } = useContext(GameContext);
  function resetButton() {
    setGameMessage();
    setActive(true);
    setCurrentPlayer('X');
    setBoard([
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
      { space: 9, content: '' },
    ]);
  }
  // resetButton();
  return (
    <>
      <div className="alpha-container">
        <Board />
      </div>
      <button onClick={resetButton} className="reset-button">
        Reset
      </button>
    </>
  );
}

export default App;

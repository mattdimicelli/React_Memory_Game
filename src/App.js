import Header from './components/Header';
import Gameboard from './components/Gameboard';
import './style.css';
import { useState } from 'react';


//randomize order with every click on a tiles
//also run that function when the component mounts


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function resetCurrentScoreAndTallyBestScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    } 
    setCurrentScore(0);
  }

  function increaseCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  function showGameOver() {
    setGameOver(true);
  }

  function hideGameOver() {
    setGameOver(false);
  }

  return (
    <div className="App">
      <Header
      currentScore={currentScore}
      bestScore={bestScore}
      gameOver={gameOver}
      />
      <Gameboard
      resetCurrentScoreAndTallyBestScore={resetCurrentScoreAndTallyBestScore}
      increaseCurrentScore={increaseCurrentScore}
      showGameOver={showGameOver}
      hideGameOver={hideGameOver}
      />
    </div>
  );
}

export default App;

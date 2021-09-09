import GameSection from './GameSection';
import {useEffect, useState } from "react";
import Rules from './Rules'
function App() {
  const [score , setScore ] = useState(0)
  const scoreHandler = (result) => {
      if(result === "draw") return;
      else if(result === "win") setScore(score+1)
      else setScore(score-1)
  }
  return (
    <div className="App">
        <header >
          <img src="images/logo.svg" alt="logo"/>
          <div className="score">
            <h3>Score</h3>
            <span>{score}</span>
          </div>
        </header>
        <GameSection scoreHandler = {scoreHandler}/>
        <Rules />
    </div>
  );
}

export default App;
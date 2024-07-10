import React, { useState } from "react";
import './TicTapToe.css';
import { Link } from "react-router-dom";

const shuffleArray = (Array) => {
    return Array.sort(() => Math.random() - 0.5);
  };

const TTT_twoStep = () => {
    const [numbers, setNumbers] = useState(
        shuffleArray([...Array(20).keys()].map((n) => n + 1))
      );
    
      const [nextNumber, setNextNumber] = useState(1);
      const [message, setMessage] = useState('숫자를 순서대로 눌러주세요!');
      const [isCorrect, setIsCorrect] = useState(false);
    
      const clickNumber = (number) => {
        if (number === nextNumber) {
          if (number === 20) {
            setMessage("축하합니다! 모든 숫자를 순서대로 클릭했습니다.");
            setIsCorrect(true);
          } else {
            setNextNumber(nextNumber + 1);
          }
        } else {
          setMessage("틀렸습니다! 처음부터 다시하세요.");
        }
      };
    
      const restartGame = () => {
        setNumbers(shuffleArray([...Array(20).keys()].map((n) => n + 1)));
        setNextNumber(1);
        setMessage('숫자를 순서대로 눌러주세요!');
        setIsCorrect(false);
      };

    return(
      <div className="tic-tap-toe-container">
      <h1>틱탭토</h1>
      <div className="tictaptoe2-grid">
        {numbers.map((number) => (
          <button className="tictaptoe-button" key={number} onClick={() => clickNumber(number)}>
            {number}
          </button>
        ))}
      </div>
      <p>{message}</p>
      {isCorrect ? <Link to='/tictaptoe'><button>처음으로</button></Link> : <button className="restart-button" onClick={restartGame}>게임 재시작</button>}
    </div>
    )
}

export default TTT_twoStep;
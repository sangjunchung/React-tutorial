import React, { useState, useEffect } from "react";
import './TicTapToe.css';
import { Link } from "react-router-dom";

const shuffleArray = (Array) => {
    return Array.sort(() => Math.random() - 0.5);
  };

/* TicTapToeTwoStep 컴포넌트 시작 위치 */
const TTT_twoStep = () => {
    const [numbers, setNumbers] = useState(
        shuffleArray([...Array(20).keys()].map((n) => n + 1))
      );
    
      const [nextNumber, setNextNumber] = useState(1);
      const [message, setMessage] = useState('숫자를 순서대로 눌러주세요!');
      const [isCorrect, setIsCorrect] = useState(false);
      const [timer, setTimer] = useState(10); // 초기 시간 설정

      //useEffect(function 기능명() => {어떤 기능이 동작해야하나요?},[어떤값이변경될때마다 function기능이 움직여야하나요?]);
      //useEffect(() => {},[]);
      //useEffect(() => {},[numbers]); // numbers 숫자가 변경될 때마다 function 기능 발생

      useEffect(()=>{
        let countdown;
        if (timer > 0){
          countdown = setTimeout(()=>{
            setTimer(timer - 1);
          }, 1000);
        } else if (timer === 0){
          alert("시간초과! 게임이 종료되었습니다.");
        }
      });

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
        setTimer(10);
      };

    return(
      <div className="tic-tap-toe-container">
      <h1>틱탭토 2단계</h1>
      <div className="timer">남은 시간 : {timer} 초</div>
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
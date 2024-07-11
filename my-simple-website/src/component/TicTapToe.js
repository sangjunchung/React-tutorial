import React, { useState, useEffect } from "react";
import './TicTapToe.css';
import { Link } from "react-router-dom";

const shuffleArray = (Array) => {
  // sort = 정렬
  // Math.random() - 0.5 : 배열을 랜덤으로 섞을 때 자주 사용 (-0.5 ~ 0.5 사이 생성)
  return Array.sort(() => Math.random() - 0.5);
};

const TicTapToe = () => {
  // numbers 1부터 9까지 숫자가 섞인 배열
  // ...Array(9) 숫자가 담길 그릇을 9 개 만듬
  // .keys() 숫자를 가지고옴
  // 어떤 숫자를 가지고 오냐면 0 => 0 + 1  1 ~ 9 생성
  // 1 ~ 9 까지 생성된 수를 shuffleArray를 이용해서 숫자가 담긴 그릇을 섞는 것
  const [numbers, setNumbers] = useState(
    shuffleArray([...Array(9).keys()].map((n) => n + 1))
  );
  // 사용자가 클릭해야하는 다음 숫자를 나타냄
  const [nextNumber, setNextNumber] = useState(1);

  // 게임 상태에 따라 사용자한테 보여줄 메세지 표현
  const [message, setMessage] = useState('숫자를 순서대로 눌러주세요!');
  
  const [isCorrect, setIsCorrect] = useState(false);
  
  const [timer, setTimer] = useState(5);

  useEffect(()=>{
    let countdown;

    if(timer > 0){
      countdown = setTimeout(()=>{
       setTimer(timer - 1)
      }, 1000);
    } else if (timer === 0){
      alert("시간초과! 게임이 종료되었습니다.");
    }
  });

  const clickNumber = (number) => {
    // 만약 사용자가 클릭해야되는 숫자와 사용자가 클릭한 숫자가 서로 일치하는가?
    if (number === nextNumber) {
      if (number === 9) {
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
    setNumbers(shuffleArray([...Array(9).keys()].map((n) => n + 1)));
    setNextNumber(1);
    setMessage('숫자를 순서대로 눌러주세요!');
    setIsCorrect(false);
    setTimer(5);
  };

  return (
    <div className="tic-tap-toe-container">
      <h1>틱탭토 1단계</h1>
      <div className="timer">남은 시간 : {timer} 초</div>
      <div className="tictaptoe-grid">
        {numbers.map((number) => (
          <button className="tictaptoe-button" key={number} onClick={() => clickNumber(number)}>
            {number}
          </button>
        ))}
      </div>
      <p>{message}</p>
      {isCorrect ? <Link to='/ttt-twoStep'><button>다음단계 이동</button></Link> : <button className="restart-button" onClick={restartGame}>게임 재시작</button>}
    </div>
  );
};

export default TicTapToe;

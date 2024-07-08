import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameTwoStep = () => {
  const [guess, setGuess] = useState();
  const [message, setMessage] = useState('정답을 맞춰주세요!');
  const [number, setNumber] = useState(Math.floor(Math.random() * 30) + 1);
  const [tryto, setTryto] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkGuess = (e) => {
    setGuess(e.target.value);
  };

  const checkNum = (e) => {
    e.preventDefault();

    const userGuess = parseInt(guess, 10);
    setTryto(tryto + 1);

    if(userGuess === number){
        setMessage('축하합니다! 정답입니다!');
        setIsCorrect(true);
    } else if (userGuess > number){
        setMessage('숫자가 너무 큽니다!');
    } else {
        setMessage('숫자가 너무 작습니다!');
    }

    setGuess('');
  };

  const restart = () => {
    setGuess('');
    setMessage('정답을 맞춰주세요!')
    setNumber(Math.floor(Math.random()*30)+1);
    setTryto(0);
    setIsCorrect(false);
  }

  return (
    <div>
      <h1>업다운 v2</h1>
      <form onSubmit={checkNum}>
        <input
          type="number"
          value={guess}
          onChange={checkGuess}
          placeholder="1~30 사이 맞추기"
        />
        <button>맞추기</button>
      </form>
      <br />
      <p>횟수 : {tryto}</p>
      <p> 결과 : {message}</p>

      {isCorrect ? (<Link to="/game"><button>처음으로</button></Link>) : (<button onClick={restart}>재시작버튼</button>)}
    </div>
  );
};

export default GameTwoStep;

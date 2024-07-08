import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
    const [guess, setGuess] = useState();
    const [message, setMessage] = useState('정답을 맞춰주세요!');
    const [number, setNumber] = useState(Math.floor(Math.random()*10)+1);
    const [attempts, setAttempts] = useState(0);
    // 사용자가 정답을 확인하면 다음 단계로 이동하는 버튼이 보이게 생성
    const [isCorrect, setIsCorrect] = useState(false);
    // 사용자가 숫자를 맞추려고 시도할 때마다 숫자로를 새로 세팅해서 저장해놓기
    const handleChange = (e) => {
        setGuess(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // 인터넷이 가지고 있는 기본 동작을 일단 방지하는 역활
        // submit 페이지를 데이터를 서버로 전송하거나 페이지가 다시 실행되는 것을 막아줌
        const userGuess = parseInt(guess, 10);
        // 혹시나 문자로 된 숫자가 아닌 물자열일 수 있기 때문에 문자열을 정수로 반환해줌
        // userGuess = 사용자가 입력한 값을 숫자로 사용할 수 있음

        setAttempts(attempts + 1); // 맞추려고 작성한 숫자를 제출할 때마다 제출 시도 획수 1씩 증가

        // 만약 숫자를 맞췄다면?
        if(userGuess === number){
            setMessage('축하합니다. 맞추셨습니다!');
            setIsCorrect(true);
        } else if(userGuess > number) {
            setMessage('숫자가 너무 큽니다!');
        } else {
            setMessage('숫자가 너무 작습니다!')
        }

        setGuess('');
    }

    const handleRestart = () => {
      const newNumber = Math.floor(Math.random()*10)+1;
      setNumber(newNumber);
      setAttempts(0);
      setMessage('정답을 맞춰주세요!');
      setGuess();
      setIsCorrect(false);
    }

    return (
    <div>
      <h1>업다운</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          placeholder="1에서 10사이의 숫자 입력하기"
        />
        <button>추측하기</button>
      </form>
      {/* 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
      <br />
      <p>횟수 : {attempts}</p>
      <p> 결과 : {message}</p>
      {/* 
      자바스크립트에서 제일 많이 쓰는 if 문은 삼항연산자 (? true : false)
      true 나 false에서 실행할 내용이 많으면 ()괄호로 묶어서 표현
      */}
      {isCorrect ? (<Link to="/game-twostep"><button>다음 단계</button></Link>) : (<button onClick={handleRestart}>재시작 버튼</button>)}
    </div>
  );
};

export default Game;

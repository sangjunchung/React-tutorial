import React, { useState } from "react";
import "./TypingTest.css";
import Result from "./Result";

const typingQuest = [ 
    "도토리는 맛있다.",
    '도토리는 정말 맛있다.',
    '도토리묵은 맛있다.',
    '도토리묵은 정말 맛있다.',
    '간장에 찍은 도토리묵은 정말 맛있다.' ]

// 클라이언트가 입력한 값이 일치하는지 확인 후 Result.js 적힌 결과를 보여주는 게임
const 타자대회 = () => {
  const [inputText, setInputText] = useState("");
  const [checkResult, setCheckResult] = useState(false);

  const [nowQuset, nextQuest] = useState(0);
  const nowText = typingQuest[nowQuset];

  const changeAnswer = (e) => {
    setInputText(e.target.value);

    if (e.target.value === typingQuest[nowQuset]) {
      setCheckResult(true);
    }
  };

  const restart = () => {
    setInputText("");
    setCheckResult(false);
  };

  const moveNextQuest = () => {
    setInputText('');
    setCheckResult(false);

    if(nowQuset < typingQuest.length-1) {
        nextQuest(nowQuset+1);
    } else {
        alert('축하합니다! 모두 정답입니다.');
        nextQuest(0);
        restart();
    }
  }

  return (
    <div className="typing-test">
      <h1>타자치기 대회 1단계</h1>
      <p>문제 : {typingQuest[nowQuset]}</p>
      <div className="typing-container">
        {/* 변경되지 않는 사진을 넣을 때는 public
        사진의 특정 값을 주기적으로 변경할 때는 src
        현재는 사진을 고정할 것이기 때문에 public */}
        <img src="/hancom.jpg" className="character-image" />
        
        {/* 
        value = 초기 빈 공간 
        onchange = 값 입력시 변경 
        disabled = 입력한 값 정답일 때 수정 막음
        */}
        <textarea
          value={inputText}
          onChange={changeAnswer}
          disabled={checkResult}
        />
      </div>
      {/* Result.js 파일에 inputText 와 typingQuest 전달 */}
      {checkResult && 
        <Result inputText={inputText} correctText={typingQuest[nowQuset]} />
      }
      {checkResult && <button onClick={moveNextQuest}>다음 문제</button>}
      &nbsp;
      {checkResult && <button onClick={restart}>재시작</button>}
    </div>
  );
};

export default 타자대회;

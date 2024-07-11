import React, { useState } from "react";
import "./TypingTest.css";
import Result from "./Result";

// 클라이언트가 입력한 값이 일치하는지 확인 후 Result.js 적힌 결과를 보여주는 게임
const 타자대회 = () => {
  const [inputText, setInputText] = useState("");
  const [checkResult, setCheckResult] = useState(false);

  const typingQuest = [ 
    "도토리는 맛있다.",
    '도토리는 정말 맛있다.',
    '도토리묵은 맛있다.',
    '도토리묵은 정말 맛있다.',
    '간장에 찍은 도토리묵은 정말 맛있다.' ]

  const changeAnswer = (e) => {
    setInputText(e.target.value);

    if (e.target.value === typingQuest) {
      setCheckResult(true);
    }
  };

  const restart = () => {
    setInputText("");
    setCheckResult(false);
  };

  return (
    <div className="typing-test">
      <h1>타자치기 대회 1단계</h1>
      <p>{typingQuest}</p>
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
        <Result inputText={inputText} correctText={typingQuest} />
      }
      {checkResult && <button onClick={restart}>다시 시작</button>}
    </div>
  );
};

export default 타자대회;

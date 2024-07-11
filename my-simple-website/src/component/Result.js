import React from "react";
import './TypingTest.css';

const Result = ({inputText, correctText}) => {
    // 텍스트로 입력한 값과 결과 확인이 일치하는지 확인
    
    const correct = (inputText === correctText);

    return (
        <div className="result">
            <h2>결과</h2>
            {correct ? (<p>완벽히 작성했네요.</p>) : (<p>틀렸어요. 다시 시도하세요.</p>)}
        </div>
    )
}

export default Result;
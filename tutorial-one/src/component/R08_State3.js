import React, {useState} from "react";

const 예제2번 = (props) => {
    // props로 전달받은 값 중 init값을 count 초기값으로 설정하기

    // setCount()를 이용해서 count 값을 변경하는 코드를 작성
    // -> 예제2번 객체에서 변경이되는 부분만 다시 표현을 진행

    // JavaScript 안에 Number 라는 객체를 이용해서 받아오는 값을 숫자로 한번 더 처리
    // String 처럼 문자열로 오는 값일 수 있으니 한번 더 숫자화 시켜줌
    const [count, setCount] = useState(Number(props.init));
    /* useState(숫자로변경(App.js에서 가져온값, 초기값이라는 변수에 담긴 값 가져오기)) */

    return (
        <div className="count-container"> {/* <div> 나 <> 사용하기 */}
            <button onClick={() => setCount(count - Number(props.step))}>
                -{props.step}
            </button>

            <h3>{count}</h3>

            <button onClick={() => setCount(count + Number(props.step))}>
                +{props.step}
            </button>
        </div>
    )
}

export default 예제2번;
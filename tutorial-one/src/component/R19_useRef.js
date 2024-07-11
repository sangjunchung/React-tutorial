import React, {useRef,useEffect} from 'react';

const Ref = () => {
    const countRef = useRef(0); // 처음 숫자 시작은 0

    useEffect(() => {
        countRef.current++;
        console.log("react 새로고침되었습니다.");
    })

    return (
        <>
            <h1>useRef</h1>
            <pre>
                React를 주기적으로 자동으로 새로고침 -> 실시간 반영
                00.js 나 컴포넌트가 새로고침 될 때마다 특정 기능이나 값이
                초기화 되지 않고 값이 유지될 수 있도록 할 때 사용
            </pre>

            <p>React가 새로고침할 때마다 숫자 값을 증가</p>
            <p>{countRef.current}</p>
        </>
    )
}

export default Ref;
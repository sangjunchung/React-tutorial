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
                React를 주기적으로 자동으로 새로고침시 실시간 반영
                00.js 나 컴포넌트가 새로고침 될 때마다 특정 기능이나 값이
                초기화 되지 않고 값이 유지될 수 있도록 할 때 사용
                
                예를 들어 로그인한 값이 새로고침해도 로그아웃을 하거나
                로그인 시간이 다 되기 전까지 로그인을 유지할 때 사용

                입력 필드의 포커스 설정
                (입력창에 마우스나 버튼을 클릭하지 않아도 값 입력을 제일 먼저 위치해주거나 스크롤 위치 관리)
            </pre>

            <p>React가 새로고침할 때마다 숫자 값을 증가</p>
            <p>{countRef.current}</p>
        </>
    )
}

export default Ref;
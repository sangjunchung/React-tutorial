import React, {createContext, useContext, useState} from "react";

/* 1. Context 객체 생성 */
const TestContext = createContext();

/* 4. 후손 컴포넌트 생성 */
const 후손 = () => {
    const [number, setNumber] = useContext(TestContext);

    return (
        <>
            <h3>후손 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}} />
        </>
    )
}

/* 3. 자식 컴포넌트 생성 */
const 자식 = () => {
    // TestContext 에서 제공된 값을 여기에서 사용
    // const [number, setNumber] = useContext(TestContext);
    const [number, setNumber] = useContext(TestContext);

    return(
        <>
            <h3>자식 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
        </>
    )
}

/* 2. 부모 컴포넌트 생성 */
const 부모 = () => {
    // 숫자 상태 변수 선언
    const [number, setNumber] = useState(0); // number 변수에 초기값 0 삽입

    /* 
    Context는 값을 1개만 제공할 수 있음
     -> 2개 이상의 값을 제공하길 원한다면 {}, []로 묶어서 제공

    <TestContext.Provider value={{number, setNumber}}>
     number와 setNumber를 {number, setNumber} 작성하면 아래와 같이 변환돼서 전달됨
     {"number" : number, "setNumber" : setNumber}
     {"number" : 0, "setNumber" : ?(변환될값)}
    */
    return (
        <TestContext.Provider value={[number, setNumber]}>
            <h1>
                부모다. :
                {/* Parent 컴포넌트의 현재 값 출력 */}
                <span className="red">{number}</span>
            </h1>
            <자식 />
            <후손 />
        </TestContext.Provider>
    )
}

export default 부모;
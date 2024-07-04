import React, {useState} from "react";

function 예제2 () {
    // const 안에 작성하는 변수명에 필수로 set이라는 값이 들어가지 
    // 않아도 되지만 어떤한 값을 변경한다 설정하기 때문에
    // const [초기값변수, set초기값변수] 라는 이름을 작성해주는 것이 좋음
    const [abc, efg] = useState('Z');

    const 값변경 = () =>{
    if(abc === 'Z') efg('X');
    else efg('Z');
    }

    return (
        <>
            <h1>{abc}</h1>
            <button onClick={값변경}>값변경하기</button>
        </>
    )
}

export default 예제2;
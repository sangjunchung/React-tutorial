import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);
    
    const clickButton = () => {
        if(inputRef.current) { // current 는 inputRef 가 설정된 태그값 확인
            inputRef.current.focus(); 
            // focus -> inputRef 라는 ref 값을 가진
            // current = input 태그를 바라보고
            // focus() = input이 null 이라면 input창 안을 중점으로 확인
        }
    }

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={clickButton}>input 안에 값이 비었으면 input으로 위치 이동</button>
        </div>
    )
}

export default RefInputFocus;
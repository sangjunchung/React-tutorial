import React, {useRef, useEffect} from 'react';

const RefEx = () => {

    const pwRef = useRef(null);

    useEffect(()=> {
        if(pwRef.current){
            pwRef.current.focus();
        }
    })

    return (
        <div>
            <form method='post'>
                <label>이름</label>
                <input type='text' placeholder='이름을 입력해주세요' />
                <label>비밀번호</label>
                <input 
                    type='password' ref={pwRef}
                    placeholder='비밀번호 입력해주세요' 
                />
            </form>    
        </div>
    )
}

export default RefEx;
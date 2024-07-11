import React, {useRef, useEffect} from 'react';

function SignUpForm() {

/*
1. const [emailRef, setEmailRef] = 초기값;
         [초기값, 변경하는값] = 초기값;
2. const emailRef = useRef(null);
         초기값만설정변수 = 새로고침해도값고정(어떤초기값)
*/
    const emailRef = useRef(null); 
    /*
    const emailRef = useRef(null); 
    emailRef {
        current : null
    }
    emailRef는 useRef(null) 값을 설정하자마자 emailRef 안에는
    emailRef {
        current : null
    } 
    current 가 자동 생성

    const pwRef = useRef(1);
    pwRef {
        current : 1
    }
    */
    // 처음에는 null 값, 나중에는 특정 값으로 변경
    // React가 새로고침 되어도, 변경된 특정값을 유지하기 위해 useRef 설정

    // useEffect를 사용해서 [] 안에 값을 비워줌으로 최초 1회만 실행하는 기능 설정
    useEffect(()=>{
        // 만약 SignUpForm이 실행되면 바로 수행할 기능 설정
        if(emailRef.current) {
            emailRef.current.focus(); // 처음 입력창이 null인 값에 자동으로 이동
        }
    }, []); 

    // useRef로 설정한 태그값에서 current는 기본으로 null 값을 갖고 있음 

    return (
        <div>
            <h2>회원가입</h2>            
            <form>
                <label>이메일</label>
                <input type='email' ref={emailRef}
                 placeholder='이메일을 입력해주세요.' />
                <label>비밀번호</label>
                <input type='password' placeholder='비밀번호를 입력해주세요.' />
            </form>
        </div>
    )
}

export default SignUpForm;
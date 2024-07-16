import React, {useState} from "react";

const SignUp = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    // 아이디 중복검사
    const [idValidation, setIdValidation] = useState(false);

    // 아이디 중복검사 이벤트 핸들러
    const idDupCheck = (eventId) => {
        // eventId : 현재 입력하는 이벤트가 발생한 Id
        setId(eventId);

        // 4글자 미만이면 중복검사 X
        // 입력받은 아이디 공백 제거하고 공백 제거한 총 길이가 4보다 적다면
        // trim() 양쪽 옆에 있는 공백 제거 length = 길이
        if(eventId.trim().length < 4){
            setIdValidation(false);
            return;
        }
        
        // DB에 중복되는 아이디가 있는지 비동기로 아이디 중복검사 수행
        // axios나 fetch를 사용할 수 있음
        fetch("/idCheck?id="+eventId) // SpringBoot Controller 와 연결한 Mapping URL
        .then(response => response.text())
        .then(result => {
            // 중복이 아닐때 true, 중복이면 false
            // Number(result) 나중에 SpringBoot 에서
            // 아이디가 중복되지 않았으면 0 을 전달, 중복이면 0이 아닌 값을 전달
            if(Number(result) === 0) {
                setIdValidation(true);
            } else {
                setIdValidation(false);
            }
        })
    }

    // 회원가입버튼
    const signUpBtn = () => {
        if(!idValidation){
            alert('아이디가 유효하지 않습니다.');
            return;
        }
        
        // 비밀번호, 비밀번호 확인이 일치하지 않으면 가입 X
        if(pw !== pw2){
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 회원가입 비동기 요청
        const inputValues = {}; // 처음엔 들어온 값이 없으니 빈 공간으로 설정
        inputValues.id = id;
        inputValues.pw = pw;
        inputValues.name = name;

        fetch("/signUp",{
            // SpringBoot Controller 에 @PostMapping("/signUp") 에 전달하겠다는 표시
            method : "post", 

            // headers : 메일로 치면 메일주소, 메일제목처럼 초기에 어떤 것을 보내는지 설정
            headers : {"Content-Type" : "application/json"},
            // <form> 태그에는 "Content-Type" : "application/json" 기본으로 생략돼서 작성
            // Content-Type 은 왜 작성해야 하는가?
            // 데이터를 전달할 때 이미지파일, 동영상 파일인지, 다중이미지파일인지 글자만 있는지 정보 전달
            // application/json : application= 코딩하는 폴더 자체를 의미 폴더 1개 = application 1개
            // json = 사용자나 개발자가 작성한 여러값을 key-value 형태로 데이터를 1개 이상 주고 받을수 있는 형태

            // body : 메일 본문 작성
            body : JSON.stringify(inputValues) // 사용자가 작성한 모든 값을 보내기
        })
        // 결과 응답 받아서 저장
        .then(response => response.text())
        .then(result => {
            if(Number(result) > 0) { // 결과가 0보다 크다면 회원가입 완료
                setResult('회원가입 성공');

                // input 값들 모두 초기화
                setId('');
                setPw('');
            } else {
                setResult('회원가입 실패');
            }
        })
    }



    return (
        <div className="signup-container">
            {/* 
            label 태그 안에 for 값을 작성하고 싶지 않다면
            <label><input/></label> label로 input을 감싸주면
            for를 작성한 것과 동일하게 설정
            */}
            <label>
                ID :
                <input type="text" 
                    onChange={e => idDupCheck(e.target.value)}
                    value={id}
                    className={idValidation ? '': 'id-err'}
                />
            </label>
            <label>
                PW : 
                <input type="password" 
                    onChange={e => {setPw(e.target.value)}}
                    value={pw}
                />
            </label>
            <label>
                PW CHECK : 
                <input type="password" 
                    onChange={e => {setPw2(e.target.value)}}
                    value={pw2}
                />
            </label>
            <label>
                NAME : 
                <input type="text" 
                    onChange={e => {setName(e.target.value)}}
                    value={name}
                />
            </label>
            <button onClick={signUpBtn}>가입하기</button>
            
            <hr/>

            {/* 회원가입이 무사히 완료됐는지 결과 표시 */}
            <h3>{result}</h3>
        </div>
    )
}

export default SignUp;
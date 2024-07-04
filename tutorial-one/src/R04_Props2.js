const 부모2번 = (props) => {
    // props : 부모 컴포넌트(태그)로부터 전달 받은 값을 담은 객체

    // js 변수 선언 / 초기화 방법 중 하나
    // 오른쪽에 있는 (props) 객체의 key 값이
    // 왼쪽에 작성된 변수명과 일치하다면 
    // 자동으로 대입시켜줌
    const {name, age, gender} = props;

    return(
        <div className="info">
            이름 : {name} / 나이 : {age} / 성별 : {gender}
        </div>
    );
}

export default 부모2번;
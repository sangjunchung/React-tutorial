const 부모3번 = (props) => {

    const {num, name, age, gender, phone} = props;

    return(
        <div className="info-ex">
            번호 : {num} 번 / 이름 : {name} / 나이 : {age} 세 / 성별 : {gender} / 번호 : {phone}
        </div>
    )
}

export default 부모3번;
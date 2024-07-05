import React, {useState} from "react";

const 예제4번 = (data) => {
    // 나이 계산하기

    const [age, setAge] = useState(Number(data.init));

    return (
        <div className="count-container">
            <button onClick={() => {setAge(age - Number(data.years))}}>
                -{data.years}년
            </button>
            <h3>현재 나이는 {age}</h3>
            <button onClick={() => {setAge(age + Number(data.years))}}>
                +{data.years}년
            </button>
        </div>
    )
}

export default 예제4번;
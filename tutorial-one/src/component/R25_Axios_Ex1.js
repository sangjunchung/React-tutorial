import React, {useState} from 'react';
import axios from 'axios';

const Axios_Ex1 = () => {
    const [data, setData] = useState(null);
    
    const callBtn = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        // 무사히 잘 가져왔다면 then으로 data 값 변경
        .then(res => {
            setData(res.data);
        })
        // 가져오는데 실패했다면 에러보여주기
        .catch( () => {
            alert("데이터 불러오기 실패");
        });
    }
    
    return (
        <>
            <h1>버튼을 클릭하면 json안에 작성된 내용 가져오기</h1>
            <button onClick={callBtn}>불러오기</button>
            {data && <textarea rows={20} cols={30} value={JSON.stringify(data,null,2)} readOnly={true} />} 
        </>
    )
}

export default Axios_Ex1;

/*
{data && <textarea value={JSON.stringify(data,null,2)} readOnly={true} />} 
 data && 데이터가 존재한다면
 <textarea 안에 Json으로 가져온 값을 추가
 value = 값
 JSON.stringify = json 으로 가져온 값을 문자열로 변환 String
 
 (data, null , 2)
 data = json으로 가져온 데이터
 null = 모두선택, String으로 어디서부터 어디까지 변환할 것인가? 에서 null, 모든 속성을 선택
 2 = 2칸씩 들여쓰기 괄호가 바뀔 때마다 2칸씩 들여쓰기
*/
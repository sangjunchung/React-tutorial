import React, {useState} from "react";

// 외부에서 만든 Context 객체를 import 가져와 사용
import UserContext from "./Usercontext";
import Child from "./Child";


// 부모 컴포넌트 정의
const Parent = () => {
    // 상태변수 userList, serUserList 선언
    // userList 초기값 빈 배열 공간으로 만들어줄 것
    const [userList, setUserList] = useState([]);
    // userList = 유저리스트 = 처음엔 아무 유저도 없기 때문에 빈 목록
    // setUserList = 추가될 유저 리스트

    return(
        <UserContext.Provider value={[userList, setUserList]}>
            <Child />
            <div>
                {/* Child에서 추가한 user 정보를 보여주는 공간 */}
                {/* userList 초기에 저장된 유저목록을 보여주는것
                    추가되는 유저 리스트는 map에 담겨서 보여지게 됨
                    map = key, value (유저의 inputName, inputAge 에 담긴 값이 저장)
                    저장이 된 모든 값을 index = 번호를 매겨 순서대로 기록
                */}
                {userList.map((user, index)=>{
                    return(
                        /* key 속성 : 배열 반복 출력시 태그를 구분하는 key */
                        <ul key={index}>
                            <li>index : {index+1}번째 유저</li>
                            <li>name : {user.name}</li>
                            <li>age : {user.age}</li>
                        </ul>    
                    )
                })}
            </div>
        </UserContext.Provider>

    )
}

export default Parent;

/*
배열.map((요소, index)=> {
    return(
        얻어온 값 확인하기
    )    
})

배열의 각 값을 순서대로 하나씩 얻어와 return 에 전달
return에서는 하나씩 얻어온 값을 모두 모아서 새로운 배열을 최종적으로 반환

index는 자동으로 0부터 번호매김이 시작되는 수의 값이기 때문에
기존에 작성한 다른 코드와 연관이 없음
index는 번호 매김용
*/
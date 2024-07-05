import React, { useState, useContext } from "react";
// 사용할 외부 Context 객체 import
import UserContext from "./Usercontext";

// 자식 컴포넌트 정의
const Child = () => {
  /* Context를 이용해서 제공받은 값을 가져오기 */

  // Context로 전달받은 객체
  // {"userList" : userList,
  //  "setUserList" : setUserList}
  // 전달받은 값의 key 값을 변수명과 똑같이 작성해서 값이 알아서 들어갈수 있게함
  const [userList, setUserList] = useContext(UserContext);

  /* 자식에서 컴포넌트 상태 변수 선언 */
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState(Number());

  const 사용자추가하기 = () => {
    // 상태 변수 값을 이용해서 user 객체 생성
    // const user = {"부모에전달할변수명" : 부모에전달할값};
    const user = { name: inputName, age : inputAge};

    // userList 복사 = ...userList(기존 유저 리스트) + 유저 데이터 추가
    // 일상 대화에서 ...을 쓰면 많은 내용이 함축적으로 담겨있는 것처럼
    // ...기존유저리스트에는 모든 유저의 리스트를 담아진 값을 복사해놓겠다.
    // ...변수명 = 변수명에 담긴 모든 값을 복사하겠다.
    const newUser = [...userList, user];
    // 기존에 있는 내용을 복제하고, 복제한 리스트에 새로운 유저를 추가해서 덮어쓰기
    setUserList(newUser); // 새로운 유저가 추가된 리스트로 변경
  };

  return (
    <div>
      <label htmlFor="inputId">이름 </label>
      <input
        type="text"
        id="inputId"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
      />
      <br/>
      <label htmlFor="inputAge">나이 </label>
      <input
        type="number"
        id="inputAge"
        onChange={(e) => {
          setInputAge(e.target.value);
        }}
        value={inputAge}
      />
      <br/>
      <button onClick={사용자추가하기}>추가하기</button>
    </div>
  );
};

export default Child;

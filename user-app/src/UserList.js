import { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addBtn = () => {
    setUsers([...users, name]); // 기존 유저 배열 복사 후 새로운 목록(name) 추가
    setName("");
  };

  /*
  const 기능 = () => {
    return 리턴값; // return 구문이 필수가 아니고, 작성할 수 있다는 의미
  }

  const 기능 = () => (
    리턴을 사용하지 않아도 반환 해줌  
  )
  */

  // filter = 배열에서 결과가 true 값만 반환

  const delBtn = (index) => {
    // users에 있는 유저 목록 user = 유저명, i = users 에 있는 유저가 저장된 번호
    const afterUsers = users.filter((d, i) => i !== index);
    setUsers(afterUsers); // 유저목록 교체하기
  };

  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addBtn}>추가하기</button>

      <h3>유저 리스트 목록보기</h3>
      {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => delBtn(index)}>삭제하기</button>
          </li>
      ))}
    </div>
  );
}

export default UserList;

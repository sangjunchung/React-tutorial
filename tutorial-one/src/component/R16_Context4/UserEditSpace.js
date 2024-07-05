import React, {useState,useContext} from "react";
import UserInfo from "./UserInfo";


const EditSpace = () => {
  const [userList, setUserList] = useContext(UserInfo);

  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  const addUser = () => {
    const user = {"name": inputName, "phone": inputPhone};
    const addUserList = [...userList, user];

    setUserList(addUserList);
    setInputName('');
    setInputPhone('');
  };

  return (
    <div>
      <label htmlFor="inputName">이름 </label>
      <input
        type="text"
        id="inputName"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
      />
      <br/>
      <label htmlFor="inputPhone">번호 </label>
      <input
        type="text"
        id="inputPhone"
        onChange={(e) => {
          setInputPhone(e.target.value);
        }}
        value={inputPhone}
      />
      <br/>
      <button onClick={addUser}>추가하기</button>
    </div>
  );
};

export default EditSpace;

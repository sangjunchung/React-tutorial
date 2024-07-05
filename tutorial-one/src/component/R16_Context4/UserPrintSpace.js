import React, {useState} from "react";
import UserInfo from "./UserInfo";
import EditSpace from "./UserEditSpace";

const PrintSpace = () => {
    const [userList, setUserList] = useState([]);

    return (
        <UserInfo.Provider value={[userList, setUserList]}>
            <EditSpace/>
            <div>
                {userList.map((user, index)=>{
                    return(
                    <ul key={index}>
                        <li>가입순서 : {index+1}</li>
                        <li>이름 : {user.name}</li>
                        <li>번호 : {user.phone}</li>
                    </ul>
                    )
                })}
            </div>
        </UserInfo.Provider>
    )
}

export default PrintSpace;
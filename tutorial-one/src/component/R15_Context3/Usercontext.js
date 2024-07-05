import React, {createContext} from "react";

// Context = 값, 설정을 저장하는 공간

const UserContext = createContext();

// 외부에 import 할 때 내보내줄 기본 값이 어떤 값인지 설정
export default UserContext;
import React, { useEffect, useState } from 'react';

const FetchEx = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    
    // 데이터 가져오기 useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => { // 1. 데이터를 무사히 가지고 왔는지 확인
            return res.json(); // 2. 데이터를 무사히 가지고 왔으면 json 정보를 넘겨주기
        })
        .then(data => {
            setUsers(data);
        }).catch(error => {
            setError(error);
            alert("비상! 에러 발생! "+error);
        })
    })

    return (
        <>
        <h1>User List 보기</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )

}

export default FetchEx;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Axion_Ex2 = () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        alert("정보 가져오기 실패!");
      });
  },[])

  return (
    <>
      <h1>json 안에 작성된 정보 가져오기</h1>
      {data && (
        <textarea
          rows={20}
          cols={80}
          value={JSON.stringify(data, null, 4)}
          readOnly
        />
      )}
      <div>
        {data && data.map((info) => (
          <ul key={info.id}>
            <li>------------------------------------------------------------------------------------------------------------------------------------------</li>
            <li>postId : {info.postId}</li>
            <li>id : {info.id}</li>
            <li>name : {info.name}</li>
            <li>email : {info.email}</li>
            <li>body : {info.body}</li>
            <li>------------------------------------------------------------------------------------------------------------------------------------------</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Axion_Ex2;

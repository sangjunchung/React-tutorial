import React, { useEffect, useState } from "react";

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(result => {
            return result.json();
        }).then(data => {
            //setPhotos(data); api 주소에 작성된 모든 데이터 가져오기
            // 데이터의 이룹분만 가져오길 원한다면 slice 이용
            // slice(처음 가져올 범위, 어디까지 가져올지 마무리 범위)
            setPhotos(data.slice(0,10)); // 데이터 처음부터 10개
        }).catch(e => {
            setError(e);
            alert("비상! 에러 발생! "+ e);
        })
    }, [])

    return (
        <>
        <h1>사진 리스트</h1>
        <ul>
            {photos.map(photo => (
                <li key={photo.id}>
                    {photo.title}<br/>
                    <img src={photo.thumbnailUrl} />
                </li>
            ))}
        </ul>
        </>
    )
}

export default PhotoList;
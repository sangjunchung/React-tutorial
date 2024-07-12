import React, {useState} from 'react';
import './R32_Profile.css'

const Profile = () => {
    const [selectImg, setSelectImg] = useState(null);

    const changeImg = (event) => {
        const file = event.target.files[0]; // 파일은 리스트 목록으로 존재 0번째부터 있겠다.
        // 추후 이미지 다중선택이 가능할 때 이미지 순서대로 가지고 올것
        // 파일은 모두 파일들이라는 전제하에 파일을 선택하기 때문에
        // 하나의 이미지를 선택할 때는 첫번째 자리 (index = 0) 인 0번째 사진을 갖고 오겠다.

        if(file) { // 만약 이미지 파일이 존재한다면
            const reader = new FileReader(); // 파일 읽기 모드 준비 FileReader 객체 생성
            reader.onloadend = () => { // 파일 읽기가 완료되었을 때 실행될 함수를 표현
                setSelectImg(reader.result); 
                // 읽어온 파일 데이터를 선택한 이미지에 변경
                // reader.result = 파일의 내용
                // (이미지를 컴퓨터 용어로 작성된 코드를 주소 값으로 변경한 데이터 주소(URL))
            };
            reader.readAsDataURL(file); 
            // readAsDataURL 기능 : 데이터 URL을 글자 취급해서 읽기 시작
            // 주소는 String 문자열로 표현
        }
    }

    return (
        <div className='profile-container'>
        <h1>프로필 사진 변경</h1>
        <label htmlFor='imgSelect'>사진 선택하기</label>
        <input id="imgSelect" type='file' accept='image/*' onChange={changeImg} />
        {/* 만약 선택한 이미지가 존재한다면 이미지 미리보기를 제공 */}
        {selectImg && (
            <div>
                <h2>미리보기</h2>
                <img src={selectImg} />
            </div>
        )}
        </div>
    )
}

export default Profile;
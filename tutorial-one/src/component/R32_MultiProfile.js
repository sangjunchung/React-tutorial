import React, {useState} from 'react';
import './R32_Profile.css'

const Profile = () => {
    const [selectImg, setSelectImg] = useState(null);

    const handleImageChange = (event) => {
      const files = event.target.files;
      const imagesArray = [];
  
      for (let i=0; i< files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          imagesArray.push(reader.result);
          if (files.length === imagesArray.length) {
            setSelectImg(imagesArray);
          }
        };
        reader.readAsDataURL(file);
      }
    };

    return (
        <div className='profile-container'>
        <h1>프로필 사진 변경</h1>
        <label htmlFor='imgSelect'>사진 선택하기</label>
        <input id="imgSelect" type='file' accept='image/*' onChange={handleImageChange} multiple />
        {/* 만약 선택한 이미지가 존재한다면 이미지 미리보기를 제공 */}
        {selectImg && (
            <div>
                <h2>미리보기</h2>
                {selectImg.map(img => (
                  <img src={img} />
                ))}
            </div>
        )}
        </div>
    )
}

export default Profile;

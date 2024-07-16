import React, {useState} from "react";
import "./R32_Profile.css";

const 멀티프로필 = () => {
    const [선택한이미지, setSelectedImages] = useState(null);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imagesArray = [];
        for (let i = 0 ; i < files.length ; i++) {
          const file = files[i];
          const reader = new FileReader();
          reader.onloadend = () => {
            imagesArray.push(reader.result);
            if (imagesArray.length === files.length) {
              setSelectedImages(imagesArray);
            }
          };
          reader.readAsDataURL(file);
        }
      };
    

    return (
        <div className="profile-container">
        <h1>프로필 사진 변경</h1>
        {/*  accept="image/*"  이미지 파일 jpg png gif ... 과 같은 이미지 확장자 허용*/}
        {/* input 태그 숨기고 label로 클릭해서 이미지 보여주기 */}
        <label htmlFor="imgSelect">사진 선택하기</label>
        <input type="file" id="imgSelect" accept="image/*" onChange={handleImageChange} />
        {/* 만약에 선택한 이미지가 존재한다면 이미지 미리보기를 제공 */}
       
        {선택한이미지 &&(
            <div>
                <h2>미리보기</h2>
                <img src={선택한이미지} />
            </div>
        )}
        </div>
    )
}
export default 멀티프로필;
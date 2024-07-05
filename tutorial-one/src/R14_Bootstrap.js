/*
bootstrap 을 이용한 npm install 사용하기

npm = nodeJs 설치나 실행 환경설정을 위한 약자

npm 을 이용해서 실행하거나 설치하거나 설정을 변경할 수 있음

https://www.npmjs.com/

npm = node package manager

npm 으로 무언가 설치할 때는
npm i 설치할파일명 
i 는 install의 약자

부트스트랩을 설치할 때는
npm i bootstrap 사용

npm i bootstrap 뒤에 추가로 @버전을 작성하지 않으면 가장 최신버전으로 설치

만약에 특정 버전을 설치하고 싶다면 
npm i bootstrap@버전
npm i bootstrap@5.2.1

부트스트랩을 삭제하길 원한다면
npm uninstall bootstrap

부트스트랩 이외 특정 파일을 삭제하길 원한다면
npm uninstall 특정 파일명

npm으로 인한 설치는 npm start로 시작하고 있는 패키지 실행여부에 관계없이 설치가 가능

import 'bootstrap/dist/css/bootstrap.css';
부트스트랩을 가져와서 사용할 때는 index.js에 import를 작성해줌

부트스트랩 뿐만 아니라 전체적으로 사용할 css는 index.js 나 App.js 에 작성

npm = 상대적으로 설치 속도 느림
yarn = npm 과 똑같은 패키지 관리자 npm 보다 좀 더 빠름

*/

import React from "react";

const 부트스트랩예제1 = () => {
    return (
        <div className="container"> {/* 반응형 레이아웃 컨테이너 만들기 */}
            <div className="row"> {/* row = 가로 = 행 생성 */}
                <div className="col-md-auto"> {/* 중간 화면 크기에서 열(세로)의 너비를 자동으로 설정 */}
                    <h1>React 와 Bootstrap 사용 시작!</h1>
                    <button className="btn btn-primary">부트스트랩 버튼</button>
                    {/* btn = 버튼 btn-primary 파란색 버튼 css */}
                </div>
            </div>
        </div>
    )
}

export default 부트스트랩예제1;
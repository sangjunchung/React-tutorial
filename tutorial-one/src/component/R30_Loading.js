import React, {useState} from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <div>로딩 중 입니다.</div>;
    
    // 또는 아래와 같이 작성 div 안에 로딩 이미지를 넣을 수 있음
    if(loading){
        return (
            <div>로딩 중 입니다.</div>
        )
    }
    // 주의할 점 : 데이터를 모두 가지고 오면 setLoading 를 false로 변경
    // setLoading(false)를 작성하지 않으면 해당 페이지는 평생 로딩 중만 보일것
    return (
        <>
        <h1>로딩표기</h1>
        <pre>
        // 만약에 로딩 중이라면 로딩 div를 보여줌
        // 자바스크립트에서 innerHTML을 사용했던 것처럼 react에서도 innerHTML을 사용할 수 있음
           if(loading) return <div>로딩 중입니다.</div>;
          /*
        영화 데이터에서 이미지가 있기 때문에 데이터가 느리게 가져옴
        사용자에게 화면이 보여지기 전에 로딩 중이라는 표시를 보여줌으로
        사용자는 조금 더 기다릴수 있는 시간을 갖게됨
        처음에 로딩 true로 설정해서 임시 화면을 띄워놓고
        데이터를 모두 가지고 오면 로딩을 false 로 변경해서 
        기존 리턴에 작성한 html 코드를 보여줌
         */
        </pre>
        </>
    )
}

export default Loading;
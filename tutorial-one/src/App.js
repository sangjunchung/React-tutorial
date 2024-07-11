import "./App.css"; /* CSS를 얻어와 아래 작성된 태그 옆에 className으로 적용 */
/* 
기본 html 에서는 CSS를 적용할 때 class 라는 이름을 사용하지만
React에서 작성한 html 에는 CSS 를 적용할 때 className 이라는 이름을 사용

css나 다른 js 파일을 가져올 때는 import를 사용

css를 가져올 때는 import "css경로와 css 파일명";
js를 가져올 때는 import [여기서 사용할 이름] from "javascript파일경로/javascript파일명";

R01.ClassComponent.js를 가져와서 App.js에 적용
R01.ClassComponent.js R01 이라는 별칭을 사용해서 App.js 적용
*/
import R01 from "./component/R01_ClassComponent.js";
import R02 from './component/R02_FunctionComponent.js';
import Props1 from './component/R03_Props.js';
import Props2 from './component/R04_Props2.js';
import Props3 from './component/R05_Props3.js';
import 예제1 from './component/R06_State1.js'; // '' "" 크게 상관 없음
import 예제2 from './component/R07_State2.js';
import 예제3번 from './component/R08_State3.js';
import 예제4번 from './component/R09_State4.js';
import 예제5번 from './component/R10_State5.js';
import 예제6번 from './component/R11_State6.js';
import 컨텍스트1 from './component/R12_Context1.js';
import 컨텍스트2 from './component/R13_Context2.js';
import 컨텍스트3 from "./component/R15_Context3/Parent.js";
import 컨텍스트4 from './component/R16_Context4/UserPrintSpace.js';
import 부트스트랩1 from './component/R14_Bootstrap.js';
import Ref예제1 from './component/R19_useRef.js';
import Ref예제2 from './component/R20_useRefInput.js';
import Ref예제3 from './component/R21_useRefSignUp.js';
import Ref예제4 from './component/R22_useRefEx.js';
import Dodgegobelin from './component/R23_Dodgegobelin/Dodgegobelin.js';

function App() {
  return (
    /*
    리액트는 알아서 새로고침을 주기적으로 자주 진행
    주석 :  / * * / -> 설명이나 추가 내용을 작성할 때 사용
          { / * * / } -> 주로 코드를 주석 처리할 때 사용
    */
    <div className="App-header">
        {/*<R01 />
        <Props1 num='1' name='홍길동' age='20' score='90' />
        <Props1 num='2' name='홍길은' age='30' score='80' />
        <Props1 num='3' name='홍길금' age='40' score='70' />
        */}
        {/*<R02 />
        <h3>Props 예제 2번 사용하기</h3>
        <Props2 name='강감찬' age='72' gender="남자" />
        */}
        {/*
        <Props2 name='강감찬' age='72' gender="남자" />

        Props2 객체는 아래와 같은 코드를 한 줄로 작성하기 위해 가져온 이름
        
        <div className="info">
            이름 : 강감찬 / 나이 : 72 / 성별 : 남자
        </div> 
        
        <h3>Props 예제 3번 사용하기</h3>
        <Props3 num='5' name="김연정" age='40' gender='여자' phone='010-1111-2222' />
        */}

        {/* <예제1 /> */}
        {/* <예제2 /> */}
        {/* <예제3번 init="50" step="10" /> */}
        {/* init = 초기값, step = 증감값 */}
        {/* <예제4번 init="40" years="1" /> */}
        {/* <예제5번 /> */}
        {/* <예제6번 /> */}
        {/* <컨텍스트1 /> */}
        {/* <부트스트랩1 /> */}
        {/* <컨텍스트2 /> */}
        {/* <컨텍스트3 /> */}
        {/* <컨텍스트4 /> */}
        {/* <Ref예제1 /> */}
        {/* <Ref예제2 /> */}
        {/* <Ref예제3 /> */}
        {/* <Ref예제4 /> */}
        <Dodgegobelin />
    </div>
  );
}

export default App;

import R01 from "./R01_ClassComponent.js";
import R02 from './R02_FunctionComponent.js';
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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>안녕하세요.</p>
        <p>리액트의 세계로 오신 것을 환영합니다.</p>
        <R01 />
        <p>-------------------------------------</p>
        <R02 />
      </header>
    </div>
  );
}

export default App;

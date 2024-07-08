import { Routes, Route } from "react-router-dom";
// Routes, Route import 해서 링크 설정
import Home from './component/Home';
import About from './component/About';
import Navbar from "./component/Navbar";
import Contect from "./component/Contect";

function App() {
  return (
    <div>
      <Navbar /> {/* 링크들 모음이 시작되기 전에 네이게이션 바에 이동 경로가 보이게 설정 */}
      <Routes> {/* 링크들 모음집이라는 설정 */}
        {/* 
        Java에서 @GetMapping("/") 으로 주소 설정해주는 것이
        React에서 path="/" 이며,
        
        Java에서 return "html파일명" 으로 보여줄 화면 설정해주는 것이
        React에서 element={<Home/>} 이다.
        
        단, index.js 는 React에서 이미 사용하고 있는 이름이기 때문에
        index.js 나 index로 시작하는 이름은 피하는게 좋음
        */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contect" element={<Contect/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

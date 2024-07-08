
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './component/Game';
import GameTwoStep from './component/GameTwoStep';
import Home from './component/Home';
import Navbar from './component/Navber';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes> {/* 링크 모음 */}
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<GameTwoStep/>} />
      </Routes>
    </div>
  );
}

export default App;

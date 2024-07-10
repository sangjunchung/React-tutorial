
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './component/Game';
import GameTwoStep from './component/GameTwoStep';
import Home from './component/Home';
import Navbar from './component/Navber';
import Header from './component/Header';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTapToe';
import TicTapToeTwoStep from './component/TicTapToeTwoStep';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes> 
      {/* 링크 모음 
      예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용
      */}
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='/game-twostep' element={<GameTwoStep/>} />
        <Route path='/todoList' element={<TodoList />} />
        <Route path='/tictaptoe' element={<TicTapToe />} />
        <Route path='/ttt-twoStep' element={<TicTapToeTwoStep />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import {Routes, Route} from 'react-router-dom';
import Navbar from './component/Navber';
import Main from './component/Main';
import TodoList from './component/TodoList';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/todoList' element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;

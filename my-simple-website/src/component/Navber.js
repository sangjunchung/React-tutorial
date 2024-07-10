import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">UpDown</Link></li>
        {/* 2단계 링크를 Navbar에는 작성하지 않음
            1단계 통과해야 2단계 링크를 보여줄 것 */}
        <li><Link to="/todoList">할일 목록 작성</Link></li>
        <li><Link to="/tictaptoe">틱탭토 게임</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
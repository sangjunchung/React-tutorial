import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/todoList">할일 목록</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
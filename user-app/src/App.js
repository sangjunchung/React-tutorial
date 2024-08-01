import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./UserList";
import TodoList from "./TodoList";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/userlist" element={<UserList/>}/>
                <Route path="/todolist" element={<TodoList/>}/>
            </Routes>
        </Router>
    )
}

export default App;
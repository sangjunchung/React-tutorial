import { useState } from "react";
//todoList css import
import './TodoList.css';
function TodoList() {
    const [todos, setTodos] = useState([]); //빈 배열로 설정
    const [input, setInput] = useState('');
  
    const addTodo = () => {
        setTodos([[...todos], { text: input, completed: false }]); //기존에 작성된 할 일 복제 후 추가
        setInput('');
    };
  
    const toggleTodo = (index) => {
      const newTodos =[...todos]; //새로운 할일 추가
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input className="todo-input"
            value={input} 
            onChange={ (e) => setInput(e.target.value)  } 
            placeholder="새로운 할 일을  추가하세요."
          />
          <button className="todo-button" onClick={addTodo} >할 일 추가하기</button>
        </div>
        <ul className="todo-ul" >
          {todos.map((todo, index) => (
            <li className="todo-li" 
              key={index} 
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
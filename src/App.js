import Form from './components/Form'
import TodoList from './components/TodoList';
import './App.css';
import { useState, useEffect } from 'react';



const App = () => {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status])
 
  

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
      break;
    }
  }
  return (
    <div className="App">
    <header>
      <h1>My Todo List </h1>
    </header>
    <Form
      inputText={inputText}
      setinputText={setinputText}
      todos= {todos}
      setTodos ={setTodos}
      setStatus = {setStatus}
    />
    <TodoList 
      todos={todos}
      setTodos={setTodos}
      filteredTodos = {filteredTodos}
    />
    
  </div>
  )
}

export default App

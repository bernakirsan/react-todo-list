import React from 'react'


const Form = ({inputText, setinputText, todos, setTodos, setStatus}) => {
    

    const inputTextHandler = (e) => { 
        setinputText(e.target.value);
    }
    const submitTodoHandler = (e) => { // No refresh onClick
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText, completed: false, id:Math.random()}
        ]);
        
        setinputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
  return (
    <div>
        <form>
        <div className="search">
            <input 
            value={inputText} 
            className="todo-input" 
            placeholder="Add..." 
            onChange={inputTextHandler}/>
            
            <button 
            className="todo-button" 
            type="submit" 
            onClick={submitTodoHandler}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    </div>
  )
}

export default Form
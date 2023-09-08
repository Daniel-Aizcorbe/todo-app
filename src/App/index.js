import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearcher';
import { TodoProvider } from '../Contexts';
import { useState } from 'react';


function App() {

  const [searchedTodo, setSearchedTodo] = useState("");

  return (
    <div className="App">
      <TodoProvider>
        <TodoCounter />
        <div className='todos-container'>
          <TodoSearch setSearchedTodo={setSearchedTodo}/>
          <TodoList searchedTodo={searchedTodo}/>
        </div>
        <CreateTodoButton />
      </TodoProvider>

    </div>
  );
}

export { App };

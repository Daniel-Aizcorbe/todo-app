import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearcher';
import { TodoProvider } from '../Contexts';


function App() {
  
  return (
    <div className="App">
      <TodoProvider>
        <TodoCounter />
        <div className='todos-container'>
          <TodoSearch />
          <TodoList />
        </div>
        <CreateTodoButton />
      </TodoProvider>

    </div>
  );
}

export { App };

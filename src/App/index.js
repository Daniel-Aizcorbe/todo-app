import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoList/TodoItem';
import { TodoSearch } from '../TodoSearcher';

function App() {

  const todoArray = [
    {text: "ejemplo1",completed: false},
    {text: "ejemplo0",completed: true},
    {text: "ejemplo2",completed: false},
    {text: "ejemplo3",completed: false},
  ];

  return (
    <div className="App">
      <TodoCounter />
      <div className='todos-container'>
        <TodoSearch />
        <TodoList>
          {todoArray.map(todo => TodoItem(todo))}
        </TodoList>
      </div>
      <CreateTodoButton />
    </div>
  );
}

export { App } ;

import "./TodoList.css";
import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../Contexts";


function TodoList({searchedTodo}) {

    const {todos} = useContext(TodoContext);

    const myTodos = todos.filter(t => t.text.includes(searchedTodo));

    return (
        <ul className="todos">
            {myTodos.map(todo => TodoItem(todo))}
        </ul>
    );
}

export { TodoList }
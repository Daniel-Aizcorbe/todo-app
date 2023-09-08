import React, { useContext } from "react";
import "./TodoList.css";
import { TodoContext } from "../Contexts";
import { TodoItem } from "./TodoItem";


function TodoList() {

    const {todos} = useContext(TodoContext);

    return (
        <ul className="todos">
            {todos.map(todo => TodoItem(todo))}
        </ul>
    );
}

export { TodoList }
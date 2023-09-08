import React, { useContext } from "react";
import "./TodoCounter.css"
import { TodoContext } from "../Contexts";

function TodoCounter() {

    const { todos } = useContext(TodoContext);

    return(<>
        {todos.filter(todo => todo.completed).length !== todos.length ? 
         <h1>TODOS COMPLETADOS: {todos.filter(todo => todo.completed).length} DE {todos.length}</h1>
        : (<h1>COMPLETASTE TODOS LOS TODOS!</h1>)}
        </>
        );

}

export { TodoCounter }
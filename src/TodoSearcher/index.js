import React from "react";
import "./TodoSearch.css"

function TodoSearch({setSearchedTodo}) {

    return (
        <input type='text' placeholder="barra busqueda" onChange={(event) => setSearchedTodo(event.target.value) }/>
    );
}

export { TodoSearch }
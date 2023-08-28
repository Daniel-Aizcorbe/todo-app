import React from "react";
import "./TodoList.css";


function TodoList(props) {

    return (
        <ul className="todos">
            {props.children}
        </ul>
    );
}

export { TodoList }
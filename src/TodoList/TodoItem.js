import React from "react";

function TodoItem({text, completed}) {

    return (
        <li className="todo_item" key={text} value={text}>
            <p>{text} : {completed ? "V" : "F"}</p>
        </li>
    );   
}

export {TodoItem}
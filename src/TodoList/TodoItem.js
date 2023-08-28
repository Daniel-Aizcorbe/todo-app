import React from "react";
import { DeleteButton } from "./DeleteButton ";

function TodoItem({text, completed}) {

    return (
        <li className="todo_item" key={text} value={text}>
            <p>{text} : {completed ? "V" : "F"}</p>
            <DeleteButton />
        </li>
    );   
}

export {TodoItem}
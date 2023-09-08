import React, { useContext } from "react";
import { DeleteButton } from "./DeleteButton ";
import { TodoContext } from "../Contexts";

function TodoItem({text, completed}) {

const {toggleComplete} = useContext(TodoContext);

    return (
        <li className="todo_item" key={text} value={text}>
            <p
                onClick={() => toggleComplete(text)}
            >{text} : {completed ? "V" : "F"}</p>
            <DeleteButton />
        </li>
    );   
}

export {TodoItem}
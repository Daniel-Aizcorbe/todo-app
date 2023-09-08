import { createContext, useState } from "react";
import { useLocalStorage } from "./LocalStorage";

const TodoContext = createContext({});

function TodoProvider({ children }) {

    const todoArray = [
        { text: "ejemplo1", completed: false },
        { text: "ejemplo0", completed: true },
        { text: "ejemplo2", completed: false },
        { text: "ejemplo3", completed: false },
    ];

    const [todos, setTodos] = useLocalStorage("TODOS_V1",todoArray);

    const toggleComplete = (text) => {
        const newTodos = [...todos];
        let index = newTodos.findIndex(t => t.text === text);
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return <TodoContext.Provider value={
        {
            todos,
            setTodos,
            toggleComplete,
        }
    }>
        {children}
    </TodoContext.Provider>

}

export { TodoContext, TodoProvider }
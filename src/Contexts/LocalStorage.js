import { useState } from "react";

function useLocalStorage(itemName, initialState) {

    let parsedItems;
    const localStorageTodos = localStorage.getItem(itemName);

    if (!localStorageTodos) {
        localStorage.setItem(itemName,JSON.stringify(initialState));
        parsedItems = initialState;
    } else {
        parsedItems = JSON.parse(localStorageTodos);
    }
    
    const [items, setItems] = useState(parsedItems);

    const saveItems = (newTodos) => {
        localStorage.setItem(itemName, JSON.stringify(newTodos))
        setItems(newTodos);
    };

    return [
        items,
        saveItems
    ];
}


export { useLocalStorage };
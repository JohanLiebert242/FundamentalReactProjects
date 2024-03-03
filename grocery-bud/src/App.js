import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
import "./App.css";

const setLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
};
const defaultItems = JSON.parse(localStorage.getItem("items") || "[]");

function App() {
    const [items, setItems] = useState(defaultItems);

    const addItem = (item) => {
        const obj = {
            name: item,
            id: nanoid(),
            complete: false,
        };
        const newObj = [...items, obj]; // Truyền thêm obj mới với mỗi value mà user nhập vào
        setItems(newObj);
        setLocalStorage(newObj);
        toast.success("Item added!");
    };

    const deleteItem = (id) => {
        const newObj = items.filter((item) => item.id !== id);
        setItems(newObj);
        setLocalStorage(newObj);
        toast.error("Item removed!");
    };

    const editItem = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                const newObj = { ...item, complete: !item.complete };
                return newObj;
            }
            return item;
        });
        setItems(newItems);
        setLocalStorage(newItems);
    };

    return (
        <section className="section-center">
            <Form addItem={addItem} deleteItem={deleteItem} />
            <Items editItem={editItem} deleteItem={deleteItem} items={items} />
            <ToastContainer position="top-center" />
        </section>
    );
}

export default App;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";
import Form from "./Form";
import ColorList from "./ColorList";
import "./App.css";

function App() {
    const [colors, setColors] = useState(new Values("#0D7AE7").all(10));

    const addColor = (color) => {
        try {
            const newColor = new Values(color).all(10);
            setColors(newColor);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <main>
            <Form addColor={addColor} />
            <ColorList colors={colors} />
            <ToastContainer position="top-center" />
        </main>
    );
}

export default App;

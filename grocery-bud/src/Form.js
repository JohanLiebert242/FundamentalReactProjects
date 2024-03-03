import { useState, useRef } from "react";
import { toast } from "react-toastify";


function Form({ addItem }) {
    const [inputValue, setInputValue] = useState("");

    const inputRef = useRef();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue) {
            try {
                addItem(inputValue);
                setInputValue("");
                inputRef.current.focus();
            } catch (error) {
                console.log(error);
            }
        }
        else {
            toast.error("The input shouldnt be empty");
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className="form-control">
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-input"
                    type="text"
                />
                <button type="submit" className="btn">
                    Add Item
                </button>
            </div>
        </form>
    );
}

export default Form;

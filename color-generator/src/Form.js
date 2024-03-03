import { useState } from "react";

function Form({ addColor }) {
    const [color, setColor] = useState("#0D7AE7");

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    };

    return (
        <section className="container">
            <h4>Color Generator</h4>
            <form onSubmit={handleSubmit} className="color-form">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="#0D7AE7"
                    onChange={(e) => setColor(e.target.value)}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: color,
                    }}
                    className="btn"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Form;

import { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState(1);
    const [texts, setTexts] = useState([]);

    console.log(inputValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTexts(data.slice(0, inputValue));
    };

    return (
        <section className="section-center">
            <h4>TIRED OF BORING LOREM IPSUM?</h4>
            <form onSubmit={handleSubmit} className="lorem-form">
                <label>Paragraph(s)</label>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    type="number"
                    name="amount"
                    id="amount"
                    min="1"
                    step="1"
                    max="8"
                />
                <button className="btn">Generate</button>
            </form>
            <article className="lorem-text">
                {texts.map((text, index) => {
                    return <p key={index}>{text}</p>;
                })}
            </article>
        </section>
    );
}

export default App;

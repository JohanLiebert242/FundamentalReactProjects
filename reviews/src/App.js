import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./App.css";
import data from "./data";

function App() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];

    // 1 % 4 === 1
    // 2 % 4 === 2
    // 3 % 4 === 3
    // 4 % 4 === 0

    const handlePrevPerson = () => {
        setIndex((prev) => {
            let newPrev = (prev - 1 + data.length) % data.length;
            return newPrev;
        });
    };

    const handleNextPerson = () => {
        setIndex((prev) => {
          let newPrev = (prev + 1) % data.length;

            return newPrev;
        });
    };

    const handleRandomPerson = () => {
        let randNum = Math.floor(Math.random() * data.length);
        if (randNum === index) {
            randNum = index + 1;
        }
        const newRand = randNum % data.length;
        setIndex(newRand);
    };

    return (
        <main>
            <div className="review">
                <div className="img-container">
                    <img alt={name} src={image} className="person-img" />
                    <div className="quote-icon">""</div>
                </div>
                <p className="author">{name}</p>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button onClick={handlePrevPerson} className="prev-btn">
                        {<FaChevronLeft />}
                    </button>
                    <button onClick={handleNextPerson} className="next-btn">
                        {<FaChevronRight />}
                    </button>
                </div>
                <button className="btn btn-hisper" onClick={handleRandomPerson}>
                    Surprise me!
                </button>
            </div>
        </main>
    );
}

export default App;

import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import {
    FaQuoteRight,
    FaChevronCircleLeft,
    FaChevronCircleRight,
} from "react-icons/fa";

function Carousel() {
    const [items, setItems] = useState(list);
    const [currentPerson, setCurrentPerson] = useState(0);

    const handleNext = () => {
        setCurrentPerson((prevIndex) => {
            const newIndex = (prevIndex + 1) % items.length;

            return newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentPerson((prevIndex) => {
            const newIndex = (prevIndex - 1 + items.length) % items.length;
            return newIndex;
        });
    };

    useEffect(() => {
       let timerId = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(timerId);
    }, [items]);

    return (
        <section className="slider-container">
            {items.map((item, index) => (
                <article
                    key={index}
                    className="slide"
                    style={{
                        transform: `translateX(${
                            100 * (index - currentPerson)
                        }%)`,
                        opacity: index === currentPerson ? 1 : 0,
                        visibility:
                            index === currentPerson ? "visible" : "hidden",
                    }}
                >
                    <img
                        className="person-img"
                        alt={item.name}
                        src={item.image}
                    />
                    <span className="name">{item.name}</span>
                    <p className="title">{item.title}</p>
                    <p className="text">{item.quote}</p>
                    <FaQuoteRight className="icon" />
                </article>
            ))}
            <button onClick={handlePrev} className="prev">
                <FaChevronCircleLeft />
            </button>
            <button onClick={handleNext} className="next">
                <FaChevronCircleRight />
            </button>
        </section>
    );
}

export default Carousel;


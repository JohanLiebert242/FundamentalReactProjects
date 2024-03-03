import { useState } from "react";
import "./App.css";
import Items from "./Items";
import data from "./data";
import Title from "./Title";
import Buttons from "./Buttons";

const allCates = ["all", ...new Set(data.map((item) => item.category))];

function App() {
    const [menuItem, setMenuItem] = useState(data);
    const [categories, setCategories] = useState(allCates);

    const getCate = (cate) => {
        if (cate === "all") {
            setMenuItem(data);
            return;
        }
        const newCate = data.filter((item) => item.category === cate);
        console.log(newCate);
        setMenuItem(newCate);
    };

    return (
        <main>
            <section className="menu">
                <Title title="Our menu" />
                <Buttons getCate={getCate} categories={categories} />
                <Items data={menuItem} />
            </section>
        </main>
    );
}

export default App;

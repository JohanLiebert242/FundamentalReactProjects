import Questions from "./Questions";
import "./App.css";
import data from "./data";
import { useState } from "react";

function App() {
    const [activeId, setActiveId] = useState(null);
    const toggleQuestion = (id) => {
        setActiveId(id === activeId ? null : id);
    };

    return (
        <main>
            <div className="container">
                <h1>Questions</h1>
                <Questions
                    activeId={activeId}
                    toggleQuestion={toggleQuestion}
                    data={data}
                />
            </div>
        </main>
    );
}

export default App;

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
function Question({ id, title, info, activeId, toggleQuestion }) {
    const isActive = id === activeId;

    //const [activeId, setActiveId] = useState(null)

    //const toggleQuestion = (id) => {
    //  setActiveId(id === activeId ? null : id)
    //}

    return (
        <div className="question">
            <header>
                <h5>{title}</h5>
                <button
                    onClick={() => toggleQuestion(id)}
                    className="question-btn"
                >
                    {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </div>
    );
}

export default Question;

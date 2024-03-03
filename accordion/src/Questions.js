import Question from "./Question";
function Questions({ data, activeId, toggleQuestion }) {
    return (
        <div>
            {data.map((i) => (
                <Question key={i.id} {...i} activeId={activeId} toggleQuestion={toggleQuestion} />
            ))}
        </div>
    );
}

export default Questions;

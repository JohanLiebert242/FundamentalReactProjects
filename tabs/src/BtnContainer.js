function BtnContainer({ data, currentIndex, setCurrentIndex }) {
    return (
        <div className="btn-container">
            {data.map((item, index) => {
                return (
                    <button
                        className={
                            index === currentIndex ? "active-btn" : "job-btn"
                        }
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {item.company}
                    </button>
                );
            })}
        </div>
    );
}

export default BtnContainer;

function Buttons({ categories, getCate }) {
    return (
        <div className="btn-container">
            {categories.map((cate) => (
                <button onClick={() => getCate(cate)} key={cate} className="btn">
                    {cate}
                </button>
            ))}
        </div>
    );
}

export default Buttons;

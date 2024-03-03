
function SingleItem({ name, id, complete, deleteItem, editItem }) {

    return (
        <div className="single-item">
            <input checked={complete} onChange={() => editItem(id)} type="checkbox" />
            <p
                style={{
                    textDecoration: complete && 'line-through',
                }}
            >
                {name}
            </p>
            <button onClick={() => deleteItem(id)} className="btn remove-btn">
                Delete item
            </button>
        </div>
    );
}

export default SingleItem;

import SingleItem from "./SingleItem";

function Items({ items, deleteItem, editItem }) {
    console.log(items);
    return (
        <div className="items">
            {items.map((item, index) => (
                <SingleItem
                    editItem={editItem}
                    deleteItem={deleteItem}
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}

export default Items;

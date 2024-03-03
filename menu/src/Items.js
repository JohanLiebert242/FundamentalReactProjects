import Item from "./Item";
function Items({ data }) {
    return (
        <div className="section-center">
            {data.map((item) => {
                return <Item key={item.id} {...item} />;
            })}
        </div>
    );
}

export default Items;

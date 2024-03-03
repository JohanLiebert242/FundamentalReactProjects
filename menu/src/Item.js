function Item({ title, price, img, desc }) {
    return (
        <>
            <article className="menu-item">
                <img className="img" alt={title} src={img} />

                <div className="item-info">
                    <header>
                        <h5>{title}</h5>
                        <span className="item-price">${price}</span>
                    </header>
                    <p className="item-text">{desc}</p>
                </div>
            </article>
        </>
    );
}

export default Item;

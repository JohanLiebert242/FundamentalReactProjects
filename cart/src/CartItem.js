import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

function CartItems({ id, title, price, img, amount }) {
    const { handleRemoveCart, increase, decrease } = useGlobalContext();

    return (
        <article className="cart-item">
            <img alt={title} src={img} />
            <div>
                <h5>{title}</h5>
                <p className="item-price">${price}</p>
                <button
                    onClick={() => handleRemoveCart(id)}
                    className="remove-btn "
                >
                    Remove
                </button>
            </div>
            <div>
                <button className="amount-btn">
                    <FaChevronUp onClick={() => increase(id)} className="amount-icon" />
                </button>
                <span className="amount">{amount}</span>
                <button className="amount-btn">
                    <FaChevronDown onClick={() => decrease(id)} className="amount-icon" />
                </button>
            </div>
        </article>
    );
}

export default CartItems;

import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

function CartContainer() {
    const { cart, handleClearCart, totalPrice } = useGlobalContext();
    const cartArray = Array.from(cart.entries());

    if (cartArray.length < 1) {
        return (
            <main className="cart">
                <h2>Your bag</h2>
                <p className="empty-cart ">is current empty</p>
            </main>
        );
    }

    return (
        <main className="cart">
            <h2>Your bag</h2>
            {cartArray.map((value) => {
                const [id, item] = value;
                return <CartItem key={id} id={id} {...item} />;
            })}
            <hr></hr>
            <div className="cart-footer">
                <div className="cart-total">
                    <p>Total</p>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button onClick={handleClearCart} className="btn btn-hipster">
                    Clear cart
                </button>
            </div>
        </main>
    );
}

export default CartContainer;

import {
    CLEAR_CART,
    REMOVE_CART,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: new Map() };

        case REMOVE_CART:
            const newCart = new Map(state.cart);
            newCart.delete(action.payload.id);
            return { ...state, cart: newCart };

        case INCREASE:
            const chosenCart = new Map(state.cart);
            const cartId = action.payload.id;
            const item = chosenCart.get(cartId);
            const newItem = { ...item, amount: item.amount + 1 };
            chosenCart.set(cartId, newItem);

            return { ...state, cart: chosenCart };

        case DECREASE:
            const currentCart = new Map(state.cart);
            const itemId = action.payload.id;
            const currentItem = currentCart.get(itemId);

            if (currentItem.amount === 1) {
                currentCart.delete(itemId);
                return { ...state, cart: currentCart };
            }

            const updatedItem = {
                ...currentItem,
                amount: currentItem.amount - 1,
            };
            currentCart.set(itemId, updatedItem);

            return { ...state, cart: currentCart };

        case LOADING:
            return { ...state, loading: true };

        case DISPLAY_ITEMS:
            const changedCart = new Map(
                action.payload.data.map((cart) => [cart.id, cart])
            );
            return {...state, cart: changedCart, loading: false};

        default:
            throw Error(`Invalid action type: ${action.type}`);
    }
};

export default reducer;

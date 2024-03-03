import { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE_CART, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import caculateTotal from "./utils";

const AppContext = createContext();
const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
    loading: false,
    cart: new Map(),
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { totalAmount, totalPrice } = caculateTotal(state.cart);

    const handleClearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const handleRemoveCart = (id) => {
        dispatch({ type: REMOVE_CART, payload: { id } });
    };

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } });
    };

    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } });
    };

    const fetchApi = async() => {
        try {
            dispatch({ type: LOADING });
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: DISPLAY_ITEMS, payload: {data}})
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleClearCart,
                handleRemoveCart,
                increase,
                decrease,
                totalAmount,
                totalPrice,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

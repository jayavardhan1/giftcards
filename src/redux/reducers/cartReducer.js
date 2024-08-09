
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART
} from '../actions/cartActions';

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Increase the quantity of the existing item
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };
        case CLEAR_CART:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

export default cartReducer;

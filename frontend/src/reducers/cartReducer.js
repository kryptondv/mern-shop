import { cartConstants } from '../constants/cartConstants';
const { CART_ADD_ITEM, CART_REMOVE_ITEM } = cartConstants;

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(item => item.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => (item.product === existItem.product ? item : item)),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product !== action.payload),
            };
        default:
            return state;
    }
};

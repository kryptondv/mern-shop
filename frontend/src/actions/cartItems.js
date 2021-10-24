import axios from 'axios';
import { cartConstants } from '../constants/cartConstants';

const { CART_ADD_ITEM, CART_REMOVE_ITEM } = cartConstants;
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    saveCartToLocalStorage(getState());
};

export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    saveCartToLocalStorage(getState());
};

const saveCartToLocalStorage = state => {
    localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
};

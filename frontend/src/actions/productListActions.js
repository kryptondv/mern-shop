import axios from 'axios';
import { productListConstants } from '../constants/productListContants';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = productListConstants;

export const listProducts = () => async dispatch => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message = error?.response?.data?.message;
        dispatch({ type: PRODUCT_LIST_FAIL, payload: message ? message : error.message });
    }
};

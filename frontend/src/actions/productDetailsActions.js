import axios from 'axios';
import { productDetailsConstants } from '../constants/productDetailsConstants';
const { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } = productDetailsConstants;

export const listProductDetails = id => async dispatch => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = error?.response?.data?.message;
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: message ? message : error.message });
    }
};

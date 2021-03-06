import { productListConstants } from '../constants/productListContants';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = productListConstants;

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

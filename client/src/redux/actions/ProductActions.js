// * theo như redux action là 1 ojb nhưng khi ta sử dụng redux-thunk ta có thể --> function 

import axios from "axios";
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants"

// Product List
export function listProductAction() {
    return (
        async (dispatch) => {
            try {
                dispatch({ type: PRODUCT_LIST_REQUEST });
                const { data } = await axios.get(`http://localhost:8080/api/v1/card-products`); // call data
                const datas = data.productCards
                dispatch({ type: PRODUCT_LIST_SUCCESS, payload: datas }) // khi mà success thì send data

            } catch (error) {
                dispatch({
                    type: PRODUCT_LIST_FAIL,
                    payload: error.response.data.message ? error.response.data.message : error.message,
                })
            }
        }
    )
}

// Product Detail
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST });
        const { data } = await axios.get(`http://localhost:8080/api/v1/card-product/products_by_id?id=${id}`);
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data.productDetail[0] });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response.data.message ? error.response.data.message : error.message,
        })
    }
}




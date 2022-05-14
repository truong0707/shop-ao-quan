import React from 'react';
import { CartContext } from '../Context';
import { useReducer } from 'react';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, BACK_DROP_HIDE, ADD_TO_CART } from '../Types';

export default function CartState({ children }) {
    const initialState = {
        showCart: false,
        cartItems: []
    }


    const [stateCart, dispatch] = useReducer(CartReducer, initialState);

    /* Xử lý show/hide Cart */
    const showHideCart = () => {
        dispatch({
            type: SHOW_HIDE_CART
        })
    }

    /* Xử lý Add Cart */
    const addToCart = (item) => {
        dispatch(
            {
                type: ADD_TO_CART,
                payload: item,
            }
        )
    }

    /* Xử lý background ngoài khi mở Cart */
    const backDropHide = () => {
        dispatch(
            {
                type: BACK_DROP_HIDE,
            }
        )
    }


    return (
        <CartContext.Provider value={{
            showCart: stateCart.showCart,
            showHideCart,
            cartItems: stateCart.cartItems,
            addToCart,
            backDropHide
        }}>
            {children}
        </CartContext.Provider>
    )
}

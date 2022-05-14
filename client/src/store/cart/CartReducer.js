import { SHOW_HIDE_CART, ADD_TO_CART, BACK_DROP_HIDE } from '../Types'

export default function CartReducer(state, action) {
    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart
            }
        }
        case ADD_TO_CART: {
            // return {
            //     ...state,
            //     cartItems: [...state.cartItems, action.payload]
            // }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
        case BACK_DROP_HIDE: {
            return {
                ...state,
                showCart: false
            }
        }
        default:
            return state;
    }
}

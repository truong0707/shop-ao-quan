import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

// sử dungkj cartContext
import { useContext } from 'react';
import { CartContext } from '../../../store/Context'

export default function CartDrawerToggle() {
    const { showHideCart } = useContext(CartContext);

    
    return (
        <>
            <p style={{fontSize: "20px", color:'#009E7F'}}  ><FaShoppingCart onClick={showHideCart} /> </p>
        </>
    )
}

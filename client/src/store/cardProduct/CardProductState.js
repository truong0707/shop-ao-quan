import { useState } from 'react';
import { CardProductContext } from '../Context';
import axios from 'axios';
import { useEffect } from 'react';


export default function CardProductState({ children }) {
    const [cardProducts, setCardProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/card-products`)
            .then(datas => setCardProducts(datas.data.productCards));
    }, [])


    return (
        <>
            <CardProductContext.Provider value={{
                cardProducts: cardProducts
            }}>
                {children}
            </CardProductContext.Provider>

        </>
    )
}

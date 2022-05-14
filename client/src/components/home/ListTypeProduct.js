import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ListTypeProduct(props) {



    return (
        <>
            <div className="list-group">
                <div onClick={props.handleClickShowList} style={{ background: "#7FAD39", lineHeight: "25px", height: "45px", color: "#fff", cursor:'pointer' }} className="list-group-item list-group-item-action " aria-current="true">
                    <div style={{ display: "flex" }}>
                        <b style={{flex: '15'}}>DANH MỤC </b>
                        <p style={{ fontSize: "16px", cursor: "pointer", flex:'1' }}> <FaCaretDown /></p>
                    </div>

                </div>

                <Link to="/shop/women's-clothing" className={props.ClassLists}><b>WOMEN'S CLOTHING</b></Link>
                <Link to="/shop/men's-clothing" className={props.ClassLists}><b>MEN'S CLOTHING</b></Link>
                <button type="button" className={props.ClassLists}><b>WATCHES</b></button>
                <button type="button" className={props.ClassLists}><b>BAGS & SHOP</b></button>
                <button type="button" className={props.ClassLists}><b>SHOES</b></button>
                <button type="button" className={props.ClassLists}><b>JEWELLERY</b></button>
                <button type="button" className={props.ClassLists}><b>ACCESSORIES</b></button>
                <button type="button" className={props.ClassLists}><b>TOYS, KID & BABY</b></button>
                <button type="button" className={props.ClassLists}><b>SPORT & OUTDOORS</b></button>
                <button type="button" className={props.ClassLists}><b>HEALTH & BEAUTY</b></button>
            </div>

        </>
    )
}

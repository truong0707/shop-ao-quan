/* import library */
import React from 'react';
import { useState } from 'react';

/* icon */
import { FiPhone } from "react-icons/fi";
import '../home/Home.css';

/* import components */
import ListTypeProduct from './ListTypeProduct';

export default function HeaderHome() {
  
    /* Xử lý show List Card */
    const [showList, setShowList] = useState(true);
    const [classList, setclassList] = useState("list-group-item list-group-item-action");

    const handleClickShowList = () => {
        setShowList(!showList)
        if (showList === true) {
            setclassList("list-group-item list-group-item-action")
        } else {
            setclassList("hideClassList")
        }
    }

    return (
        <div style={{paddingTop:'90px', width:'94%'}} className="container-fluid header-home-page">
            {/* List product type */}
            <div className="box-list-product-header-home">
                <ListTypeProduct
                    handleClickShowList={handleClickShowList}
                    ClassLists={classList}
                />

                <div className="box-carosel-header-home">

                    <div className="row">
                        <form className="col-xl-9">
                            <select style={{ width: "25%", height: "50px", outline: "0" }} name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                            <input className="input-seach-header-home" placeholder="What do you need?" />
                            <button className="button-search-header-home">SEARCH</button>
                        </form>


                        <div style={{ textAlign: "right" }} className="col-xl-3">
                            <div className='row'>
                                <b style={{ borderRadius: "50%", background: "#8ec936", height: "50px", width: "50px", textAlign: "center", lineHeight: "50px", color:'#fff' }} className='col-xl-1'>
                                    <FiPhone />
                                </b>
                                <div className='col'>
                                    <p> <b>+65 11.188.888 </b> <br />
                                        <a href='/' style={{fontSize: "14px"}}>support 24/7 time</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="carosel-main-header-home">

                    </div>
                </div>
            </div>



            <div className="box-list-item-header-home">
                <p className="item-header-home1"></p>
                <p className="item-header-home2"></p>
                <p className="item-header-home3"></p>
            </div>
        </div>
    );
}

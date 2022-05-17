import React from 'react';
import BoxTitle from '../reuseComponents/BoxTitle';
import { useState, useEffect } from 'react';
import CardProduct from '../reuseComponents/CardProduct';
import '../home/Home.css'
import SliderProduct from '../reuseComponents/SliderProduct';
// use store in Redux
import { useDispatch, useSelector } from 'react-redux';
import { listProductAction } from "../../redux/actions/ProductActions";
import BoundaryLineText from '../reuseComponents/BoundaryLineText';
import Button from '../reuseComponents/Button';
import BoundaryLine from '../reuseComponents/BoundaryLine';

// icon
export default function BodyHome() {
    // window.scrollTo(0, 0);
    const productList = useSelector((state) => state.productList) // lấy dữ liệu từ kho redux
    const dispatch = useDispatch() // sử dụng dispath --> add action
    const { loading, error, products } = productList;
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        dispatch(listProductAction())
    }, [dispatch])


    const handleShowMoreCard = () => {
        if (limit > 5) {
            alert("Hết hàng rồi ba :((")
        } else {
            setLimit(pre => pre + 4)
        }

    }

    return (
        <>
            <div className='body__home__page'>
                <div className='container-fluid content__body__home'>
                    <div style={{ marginTop: "40px" }}>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                            styleCard={{ textAlign: "center" }}
                        />
                    </div>


                    {/*  Card Product Body Home  */}
                    <div>xxssssssssssssssssssssssssssssss</div>
                    <div className="list-products-body-home">
                        {
                            loading ? ("loading...") : error ? ("errror") : (
                                <>
                                    {products.slice(0, limit).map((card) => (
                                        <CardProduct
                                            key={card._id}
                                            productId={card._id}
                                            imageCard={card.imgCard}
                                            nameCard={card.nameCard}
                                            descriptionCard={card.descriptionCard}
                                        />
                                    ))}
                                </>
                            )
                        }
                    </div>

                    {/*  Button load card Body home */}
                    <Button
                        classbtnType='button-loat-cards-body-home'
                        handleButton={handleShowMoreCard}
                        contentButton='Load more' />
                </div>

                {/* Product 2 */}
                <div className='container-fluid content__body__home'>
                    <BoundaryLineText />
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                        <div className="card" style={{ width: '360px', marginLeft: '20px', marginRight: 'auto', borderRadius: '0px' }}>
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-1-compressor_800x_crop_center.jpg?v=1541556010" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                            {/* btn shop now */}
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now'
                            />
                        </div>

                        <div className="card" style={{ width: '360px', marginLeft: '20px', marginRight: 'auto', borderRadius: '0px' }}>
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now'
                            />
                        </div>  

                        <div className="card" style={{ width: '360px', marginLeft: '20px', marginRight: 'auto', borderRadius: '0px' }}>
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-3-compressor_800x_crop_center.jpg?v=1541556068" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now'
                            />
                        </div>
                    </div>
                </div>

                <BoundaryLine />

                {/* image content */}
                <img style={{ height: '460px', width: '100%', marginTop: '20px' }} src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/banner-1-compressor_1920x.jpg?v=1541390762' alt='' />

                {/* <div style={{ marginTop: "25px" }}>
                    <BoxTitle
                        nameBox="LATEST PRODUCTS"
                        line="________________"
                        contentBox1="Lorem ipsum dolor sit amet, consectetur"
                        contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                        styleCard={{ textAlign: "center" }}
                    />
                </div> */}

                <div className='container-fluid content__body__home'>
                    <BoundaryLine />

                    <div className='container-fluid wrap__slider__product'>
                        <SliderProduct />
                        <Button
                            classbtnType='button-loat-cards-body-home'
                            contentButton='VIEW GALLERY'
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
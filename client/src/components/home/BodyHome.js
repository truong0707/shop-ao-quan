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
        if (limit > products.length) {
            alert("Hàng trong kho đã hết")
        } else {
            setLimit(pre => pre + 4)
        }

    }

    return (
        <>
            <div className='body__home__page'>
                {/* trademark */}
                <div className='wrapper__content__home'>
                <BoundaryLineText />
                    <div className='box__trademark'>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-1-compressor_250x.jpg?v=1541560760' style={{width: '100%', height:'100%'}} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-2-compressor_250x.jpg?v=1541560776' style={{width: '100%', height:'100%'}} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-3-compressor_250x.jpg?v=1541560797' style={{width: '100%', height:'100%'}} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-5-compressor_250x.jpg?v=1541560823' style={{width: '100%', height:'100%'}} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-4-compressor_250x.jpg?v=1541560806' style={{width: '100%', height:'100%'}} /></div>
                    </div>
                </div>

                <div className='wrapper__content__home'>
                <BoundaryLine/>
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
                <div className='wrapper__content__home'>
                    <BoundaryLineText />
                    <div className='img__Featured'>
                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-1-compressor_800x_crop_center.jpg?v=1541556010" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                            {/* btn shop now */}
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' />
                        </div>

                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' />
                        </div>

                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-3-compressor_800x_crop_center.jpg?v=1541556068" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' />
                        </div>
                    </div>
                </div>

                <div className='wrapper__content__home'>
                    <div style={{ marginTop: "40px" }}>
                        <BoundaryLineText />
                    </div>
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

                {/* image content */}
                <img style={{ height: '400px', width: '100%', marginTop: '20px' }} src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/banner-1-compressor_1920x.jpg?v=1541390762' alt='' />

                <div style={{ width: '91%', margin: 'auto' }}>
                    <div className='content__body__home'>
                        <div className='wrap__slider__product'>
                            <SliderProduct />
                            <Button
                                classbtnType='button-loat-cards-body-home'
                                contentButton='VIEW GALLERY'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


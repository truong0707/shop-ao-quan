// import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartContext } from '../store/Context';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../redux/actions/ProductActions';



export default function DetailProduct() {
    // Lấy param id sản phẩm
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]; /* cat id  params*/

    const { addToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetail;


    useEffect(() => {
        dispatch(listProductDetails(pathId));
    }, [dispatch, pathId])


    return (
        <>
            <div style={{ marginTop: '50px' }} className='Wrap__detail__product'>
                {
                    loading ? ('loading') : error ? ('err')
                        :
                        (
                            <>
                                <div className='container-fluid contentDetail'>
                                    <div>
                                        <img style={{ minHeight: '290px', maxWidth: '250px' }} src={product.imgCard} alt='' />
                                    </div>

                                    <div style={{ marginLeft: '25px', width: '50%' }}>
                                        <div className='wrap__ifo__detail'>
                                            <h5>{product.nameCard}</h5>
                                            <p>{product.Price}</p>
                                            <p>Chọn size: </p>
                                            <p>Màu sắc: </p>
                                            <p>Số lượng: </p>
                                        </div>

                                        <div style={{ marginTop: '104px' }} className='wrap__groupButton__detail'>
                                            <div className='button__add__card'><p onClick={() => addToCart(productDetail)} style={{ margin: 'auto' }}>Thêm vào giỏ hàng</p></div>
                                            <div className='button__buy__now'><p style={{ margin: 'auto' }}>Mua ngay</p></div>
                                        </div>

                                        {/*  */}
                                        <div className='button__check__shop'><p style={{ margin: 'auto' }}>Đang có tại các cửa hàng</p></div>
                                    </div>
                                    {/* <p style={{ height: '280px', width: '1px', background: '#E0E0E0', marginLeft: '15px', marginRight: '15px' }}></p>

                    <div style={{ width: '23%', color: '#2D2D2D', fontSize: '14px' }}>
                        <p>» BẢO HÀNH SẢN PHẨM 90 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                    </div> */}
                                </div>
                            </>
                        )
                }
            </div>
        </>

    )
}

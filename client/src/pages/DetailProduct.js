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
                                <div style={{ padding: '0' }} className='container-fluid content__product__detail'>
                                    <div className='row wrap__info__product'>
                                        <div className='col-xl-3'>
                                            <img style={{ width: "100%" }} src={product.imgCard} />
                                        </div>
                                        <div className='col-xl-6'>
                                            <h5>{product.nameCard}</h5>
                                            <p>Giá: {product.Price}$</p>
                                            <p>Trạng thái: còn hàng</p>
                                            <p>Chất liệu: Vải jean 100% dày dặn, không bao giãn</p>
                                            <p>Kích cỡ:</p>
                                            <p>Màu sắc:</p>

                                            <div style={{ marginTop: '104px' }} className='wrap__groupButton__detail'>
                                                <div className='button__add__card'><p onClick={() => addToCart(productDetail)} style={{ margin: 'auto' }}>Thêm vào giỏ hàng</p></div>
                                                <div className='button__buy__now'><p style={{ margin: 'auto' }}>Mua ngay</p></div>
                                            </div>
                                        </div>

                                        {/* support online */}
                                        <div className='col-xl-3'>
                                            <div className='box__support__online'>
                                                <div>
                                                    <p style={{ textAlign: "center" }}>Bạn muốn hỏi về sản phẩm?</p>
                                                    <p style={{ textAlign: "center" }}>Zalo/Hotline: 0707241906</p>
                                                    <div className='CS'>chính sách bán hàng</div>
                                                    <div>
                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Giao Hàng toàn quốc</p>
                                                        </div>

                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Thanh Toán khi nhận hàng </p>
                                                        </div>

                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Đổi Trả trong 7 ngày</p>
                                                        </div>

                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Hoàn Ngay tiền mặt</p>
                                                        </div>

                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Chất Lượng đảm bảo</p>
                                                        </div>

                                                        <div className='row cs'>
                                                            <div className='col-xl-1'>s</div>
                                                            <p className='col-xl-10'>Hình chụp sản phẩm thật</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                }
            </div>
        </>
    )
}


// {/* <div className='container-fluid contentDetail'>
//     <div>
//         <img style={{ minHeight: '290px', maxWidth: '250px' }} src={product.imgCard} alt='' />
//     </div>

//     <div style={{ marginLeft: '25px', width: '50%' }}>
//         <div className='wrap__ifo__detail'>
//             <h5>{product.nameCard}</h5>
//             <p>{product.Price}</p>
//             <p>Chọn size: </p>
//             <p>Màu sắc: </p>
//             <p>Số lượng: </p>
//         </div>

//         <div style={{ marginTop: '104px' }} className='wrap__groupButton__detail'>
//             <div className='button__add__card'><p onClick={() => addToCart(productDetail)} style={{ margin: 'auto' }}>Thêm vào giỏ hàng</p></div>
//             <div className='button__buy__now'><p style={{ margin: 'auto' }}>Mua ngay</p></div>
//         </div>

//         {/*  */}
//         <div className='button__check__shop'><p style={{ margin: 'auto' }}>Đang có tại các cửa hàng</p></div>
//     </div>

//     <p style={{ height: '280px', width: '1px', background: '#E0E0E0', marginLeft: '15px', marginRight: '15px' }}></p>

//     {/* box support */}
//     <div style={{ width: '23%', color: '#2D2D2D', fontSize: '14px' }}>
//         <p>Hỗ trợ trực tuyến</p>
//         <p>» BẢO HÀNH SẢN PHẨM 90 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//         <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
//     </div>
// </div> */}

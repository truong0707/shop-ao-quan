/* import library */
import React from 'react';
import { Link } from 'react-router-dom';

/* import components */
import DrawerToggleButton from '../reuseComponents/SideDrawer/DrawerToggleButton';
import '../navbar/NavBar.css';
import CartDrawerToggle from '../reuseComponents/cartDrawer/CartDrawerToggle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';

/* icon */



export default function NavBar(props) {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // Xử lý lohout
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    {/* Open/Close Menu */}
                    <div className="faBar" >
                        <DrawerToggleButton drawerToggleClick={props.drawerToggleClick} />
                    </div>

                    {/* LOGO Nav */}
                    <div style={{ marginLeft: "15px" }}><Link className="toolbar__logo" to="/"><b>Logo</b></Link></div>


                    <div className="spacer"></div>

                    <div className="toolbar__navigation-items">
                        <ul>
                            <Link className="item__bar" to="/">
                                <li>Home</li>
                            </Link>

                            <Link className="item__bar" to="/shop">
                                <li>Shop</li>
                            </Link>

                            <Link className="item__bar" to="/blog">
                                <li>Blog</li>
                            </Link>

                            <Link className="item__bar" to="/news">
                                <li>News</li>
                            </Link>

                            <Link className="item__bar" to="/contacts">
                                <li>Contacts</li>
                            </Link>
                        </ul>

                    </div>
                    <div className="spacer"></div>


                    <div>
                        <ul>
                            <li style={{ marginTop: '12px', listStyle: 'none' }} className='item__bar__card' >
                                {/* cart */}
                                <CartDrawerToggle />
                                {/* {cartItems.length > 0 && <div className='item__count'>
                                                <span><b>{cartItems.length}</b></span>
                                            </div>} */}
                            </li>
                        </ul>
                    </div>


                    <div className="toolbar__navigation-user-store">
                        <ul>
                            {userInfo ? (
                                <>


                                    <li style={{ width: '35px' }} className='profile item__bar '>
                                        <img src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/277791657_106083558732245_8190340676768010477_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BPQNhoKt-hIAX9HkOsG&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9IlVP-h71OXWudKsvHhX5fUOPEhFfrQJMfbj_E5dZrhw&oe=62711985' alt='' className='avatar__user'></img>
                                    </li>

                                    <li style={{ minWidth: '100px', textAlign: 'center', alignItems: 'center', height: '50px' }} className='profile item__bar'>Hi, {userInfo.name}</li>
                                    <Link to=''>
                                        <li className='profile item__bar' onClick={handleLogout}>
                                            logout
                                        </li>
                                    </Link>
                                </>

                            ) : (
                                <>
                                    <Link style={{ width: '100px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/login"><p style={{ margin: 'auto' }}>Đăng Nhập</p></Link>
                                    <Link style={{ width: '80px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/signup"><p style={{ margin: 'auto' }}>Đăng Ký</p></Link>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

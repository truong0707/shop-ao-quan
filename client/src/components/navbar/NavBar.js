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
    // click Show profile
    const handleclickProfile = () => {
        
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
                                    <Link to='/profile'>
                                        <li style={{ width: '35px' }} className='profile item__bar' onClick={handleclickProfile}>
                                            <img src='https://avatars.githubusercontent.com/u/70809618?s=400&u=4fa5bdd589e6f6bb0f6377be69ba8146f75d389b&v=4' alt='' className='avatar__user'></img>
                                        </li>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} to='/profile'>
                                        <li style={{ minWidth: '100px', textAlign: 'center', alignItems: 'center', height: '50px' }} className='profile item__bar' onClick={handleclickProfile}>
                                            Hi, {userInfo.name}
                                        </li>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} to=''>
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

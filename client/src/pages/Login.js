import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from '../redux/actions/userActions';


// 
import Error from "../components/Loading&Error/Error";


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate , redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            <p style={{ height: '60px' }}></p>
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                {error && <Error/> }
                {loading && 'Loading'}
                <form className="Login col-md-8 col-lg-4 col-11" onClick={submitHandler} >
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Đăng Nhập</button>
                    <p>
                        <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Create Account</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;
